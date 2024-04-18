import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('PlansScreen' as never);
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen2</Text>
            <Button title='next' onPress={handleNavigate} />

        </View>
    )
}

export default HomeScreen;