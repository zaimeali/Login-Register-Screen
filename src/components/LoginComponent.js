import React from 'react'
import { View, Text, Button } from 'react-native'

export default function LoginComponent({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <Button 
                title="Register"
                onPress={ () => navigation.navigate('Register') } 
            />
        </View>
    )
}
