import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/ui/Header'
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from '../../components/ui/ProgressBar';
import { useNavigation } from '@react-navigation/native';

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3); // Un valor de ejemplo, puedes cambiarlo según lo necesites
    const navigation = useNavigation();


    return (
        <>
            <ScrollView style={{ backgroundColor: '#FAFBFF' }}>
                <SafeAreaView />
                <Header />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Entypo name="chevron-with-circle-left" size={24} color="#A9AFD9" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Paso 1 de 2
                    </Text>
                    <ProgressBar progress={progress} />
                </View>

            </ScrollView>
        </>
    )
}
export default PlansScreen;
const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: 0.8,
        color: '#141938',
    },
});