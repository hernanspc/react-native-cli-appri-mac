import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BackgroundView from '../../components/ui/Background';


const HomeScreen = () => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('PlansScreen' as never);
    }

    return (
        <BackgroundView>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>

            <View style={{ flex: 1, paddingHorizontal: 0 }}>
                <Button title='next' onPress={handleNavigate} />


            </View>


        </BackgroundView>
    )
}

export default HomeScreen;