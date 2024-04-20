import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Header from '../../components/ui/Header';
import ResumeTitle from '../../components/ui/ResumeTitle';
import ic_family from '../../assets/images/gl-family.png';
import Divider from '../../components/ui/Divider';
import SubTitleResume from '../../components/ui/SubTitleResume';
import InformativeTextResume from '../../components/ui/InformativeTextResume';

export default function ResumeScreen() {
    return (
        <>
            <ScrollView style={{ backgroundColor: '#FAFBFF' }}>
                <SafeAreaView />
                <Header />
                <ResumeTitle title="Resumen del seguro" />
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styles.planCard}>
                        <View>
                            <Text style={styles.informative}>
                                precios calculados para:
                            </Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image source={ic_family} style={{ height: 24, width: 24, marginRight: 15 }} />
                                <Text style={styles.clientName}>Rocio Miranda</Text>
                            </View>
                            <Divider stylesProp={{ marginHorizontal: 0, marginVertical: 15 }} />
                        </View>

                        <SubTitleResume title='Responsable de pago' />
                        <InformativeTextResume title='DNI: 444888888' />
                        <InformativeTextResume title='Celular: 5130216147' />

                        <SubTitleResume title='Plan elegido' />
                        <InformativeTextResume title='Plan en Casa y Clínica' />
                        <InformativeTextResume title='Costo del Plan: $99 al mes' />
                    </View>
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    planCard: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        shadowColor: '#AEACF3',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.35,
        shadowRadius: 32,
        elevation: 5, // Para Android
    },
    informative: {
        fontFamily: 'Lato-Regular',
        fontWeight: '900',
        fontSize: 10,
        lineHeight: 16,
        letterSpacing: 0.8,
        color: '#000000',
        textTransform: 'uppercase',
    },
    clientName: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: -0.2,
    }
})