import React, { useState } from 'react'

import { View, Text, SafeAreaView, Alert, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Component
import FieldComponent from '../component/FieldComponent';

// Style
import { styles } from "../styles/screenStyle";

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';



export default function RegisterComponent({ navigation }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let alertTitle = "Register Data" 

    function resetFields() {
        setUsername("");
        setEmail("");
        setPassword("");
    }

    function onSubmit() {
        if(username.length && email.length && password.length){
            Alert.alert(
                alertTitle,
                `Username: ${username}\nEmail: ${email}\nPassword: ${password}`,
            );
            resetFields();
        }
        else if(username.length === 0 && email.length > 0 && password.length > 0) {
            Alert.alert(
                alertTitle,
                `You forgot to enter Username`,
            );
        }
        else if(username.length > 0 && email.length === 0 && password.length > 0) {
            Alert.alert(
                alertTitle,
                `You forgot to enter Email`,
            );
        }
        else if(username.length > 0 && email.length > 0 && password.length === 0) {
            Alert.alert(
                alertTitle,
                `You forgot to enter Password`,
            );
        }
        else {
            Alert.alert(
                alertTitle,
                `You forgot to enter all fields`,
            );
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.layoutTop }>
                <Text style={ styles.title }>Sign Up</Text>
                <View style={ styles.inputFieldView }>
                    <FieldComponent 
                        changeContent={ setUsername } 
                        placeholderText="Username" 
                        isPassword={ false }
                        value={ username } />
                        
                    <FieldComponent 
                        changeContent={ setEmail } 
                        placeholderText="Email" 
                        isPassword={ false }
                        value={ email } />

                    <FieldComponent 
                        changeContent={ setPassword } 
                        placeholderText="Password" 
                        isPassword={ true }
                        value={ password } />
                </View>
                <View style={ styles.buttonRegisterDesignView }>
                    <TouchableOpacity 
                        style={ styles.btn }
                        onPress={ onSubmit }
                    >
                        <Icon name="arrow-right" size={18} color="#fff" />
                    </TouchableOpacity>
                </View> 
            </View>
            
            <View style={ styles.layoutBottom }>
                <View style={ styles.navigateView }>
                    <Text style={ styles.specialBtnText }>
                        Already have an account?
                    </Text>
                    <TouchableOpacity 
                        onPress={ () => navigation.navigate('Login') } 
                    >
                        <Text style={ styles.navigateBtn }>&nbsp;&nbsp;SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
