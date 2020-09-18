import React from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// Style
import { styles } from "../styles/screenStyle";

// Icons
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginComponent({ navigation }) {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.layoutTop }>
                <Text style={ styles.title }>Sign In</Text>
                <View style={ styles.inputFieldView }>
                    <TextInput 
                        style={ styles.inputFields }
                        placeholder="Username"
                        placeholderTextColor="#ab7473"
                        secureTextEntry={ false }
                    />
                    <TextInput 
                        style={ styles.inputFields }
                        placeholder="Password"
                        placeholderTextColor="#ab7473"
                        secureTextEntry={ true }
                    />
                </View>
                <View style={ styles.buttonDesignView }>
                    <TouchableOpacity style={ styles.specialBtn }>
                        <Text style={ styles.specialBtnText }>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.btn }>
                        <Text style={ styles.btnText }>➡</Text>
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