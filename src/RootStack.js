import React from 'react'
import { View, Text } from 'react-native'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'

// Components
import LoginComponent from './components/LoginComponent'


// const Stack = createStackNavigator()

export default RootStack = () => {
    return (
        <NavigationContainer>
            <View>
                <Text>Nice</Text>
            </View>
        </NavigationContainer>
    )
}