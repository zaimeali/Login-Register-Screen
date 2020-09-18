import React from 'react'
import { View, Text, Button } from 'react-native'

export default function RegisterComponent({ navigation }) {
    return (
        <View>
            <Text>Register</Text>
            <Button 
                title="Login"
                onPress={ () => navigation.navigate('Login') }
            />
        </View>
    )
}
