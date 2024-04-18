import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../home/HomeScreen'
import PlansScreen from '../plans/PlansScreen'

const HomeStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="PlansScreen" component={PlansScreen} />
                <Stack.Screen name="ResumeScreen" component={HomeScreen} />
            </Stack.Navigator>
            {/* <AppStack /> */}
        </NavigationContainer>
    )
}

export default HomeStack
