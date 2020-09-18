import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import LoginComponent from './screen/LoginComponent'
import RegisterComponent from './screen/RegisterComponent';


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