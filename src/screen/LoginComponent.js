import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Component
import FieldComponent from '../component/FieldComponent';

// Style
import { styles } from "../styles/screenStyle";

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';



export default function LoginComponent({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit() {
        if(username.length && password.length){
            Alert.alert(
                "Login Data",
                `Username: ${username}\nPassword: ${password}`,
            );
        }
        else if(username.length === 0 && password.length > 0) {
            Alert.alert(
                "Login Data",
                `You forgot to enter Username`,
            );
        }
        else if(username.length > 0 && password.length === 0) {
            Alert.alert(
                "Login Data",
                `You forgot to enter Password`,
            );
        }
        else {
            Alert.alert(
                "Login Data",
                `You forgot both fields to Enter`,
            );
        }
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.layoutTop }>
                <Text style={ styles.title }>Sign In</Text>
                <View style={ styles.inputFieldView }>
                    <FieldComponent 
                        changeContent={ setUsername } 
                        placeholderText="Username" 
                        isPassword={ false } />
                    <FieldComponent 
                        changeContent={ setPassword } 
                        placeholderText="Password" 
                        isPassword={ true } />
                </View>
                <View style={ styles.buttonDesignView }>
                    <TouchableOpacity style={ styles.specialBtn }>
                        <Text style={ styles.specialBtnText }>Forgot Password?</Text>
                    </TouchableOpacity>
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
                        Don't have an account?
                    </Text>
                    <TouchableOpacity 
                        onPress={ () => navigation.navigate('Register') } 
                    >
                        <Text style={ styles.navigateBtn }>&nbsp;&nbsp;SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}