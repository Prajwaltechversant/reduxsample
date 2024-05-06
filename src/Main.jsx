import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home/Home'
import Data from './screens/Data/Data'
import { LoginContextAPI } from './context/ContextShare'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


const Stack1 = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name='Login' component={Login} />
        </LoginStack.Navigator>
    )
}


const Stack2 = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Data' component={Data} />
        </Tab.Navigator>
    )
}



const Main = () => {

    const [token, setToken] = useState()
    const { tokenStatus, setTokenStatus } = useContext(LoginContextAPI)

    const checkIsLoggedIn = async () => {
        const isLoggedIn = await AsyncStorage.getItem('user');

        if (isLoggedIn) {
            setToken(isLoggedIn);
        } else {
            setToken(null)
        }
    };

    useEffect(() => {
        checkIsLoggedIn();

    }, [tokenStatus, token]);
    return (
        <NavigationContainer>
            {
                !token ?
                    <Stack1 />
                    :
                    <Stack2 />
            }

        </NavigationContainer>
    )
}

export default Main

