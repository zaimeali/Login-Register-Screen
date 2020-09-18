import React from 'react'
import { View, Text } from 'react-native'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// Components
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent';


const Stack = createStackNavigator()

export default RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={ LoginComponent } 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="Register" 
                    component={ RegisterComponent } 
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}