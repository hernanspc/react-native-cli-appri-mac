import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/ui/Header'
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from '../../components/ui/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/ui/Divider';
import Card from '../../components/ui/Card';
import formMe from '../../assets/images/form-me.png';
import others from '../../assets/images/others.png';

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3); // Un valor de ejemplo, puedes cambiarlo según lo necesites
    const navigation = useNavigation();


    return (
        <>
            <ScrollView style={{ backgroundColor: '#FAFBFF' }}>
                <SafeAreaView />
                <Header />

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>
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
                <Divider stylesProp={{ marginHorizontal: 0 }} />

                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <Text style={{
                        fontFamily: 'Lato',
                        fontWeight: '700',
                        fontSize: 28,
                        lineHeight: 36,
                        letterSpacing: -0.2,
                        color: '#141938',
                        marginBottom: 10,
                    }}>
                        Rocío ¿Para quién deseas cotizar?
                    </Text>

                    <Text style={{
                        fontFamily: 'Lato',
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 28,
                        letterSpacing: 0.1,
                        color: '#000000', // Puedes cambiar este color si es necesario
                    }}>
                        Selecciona la opción que se ajuste más a tus necesidades.
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20 }}>
                    <Card imageSourceTitle={formMe} title='Para mi' description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.' />
                    <Card imageSourceTitle={others} title='Para alguien más' description='Realiza una cotización para uno de tus familiares o cualquier persona.' stylesProp={{ marginTop: 20 }} />
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