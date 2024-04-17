import React from 'react'

import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <View>
            <Text>HomeStacki</Text>
        </View>
    )
}