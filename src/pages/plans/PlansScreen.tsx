import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Header from '../../components/ui/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from '../../components/ui/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/ui/Divider';
import Card from '../../components/ui/Card';
import { options } from '../../utils/optionsPlans';
import { dataPlansOptions } from '../../utils/dataPlansOptions';
import TitleText from '../../components/ui/TitleText';
import DescriptionText from '../../components/ui/BoldText';
import CustomButton from '../../components/ui/CustomButton';
import BorderedText from '../../components/ui/BorderedText';

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation();

    const handleSelect = (optionId: string) => {
        setSelectedOption(optionId);
        setProgress(0.5);
    };

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
                    <Text style={styles.headerText}>
                        Rocío ¿Para quién deseas cotizar?
                    </Text>

                    <Text style={{
                        fontFamily: 'Lato',
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 28,
                        letterSpacing: 0.1,
                        color: '#000000',
                    }}>
                        Selecciona la opción que se ajuste más a tus necesidades.
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20 }}>
                    {options.map((option) => (
                        <Card
                            key={option.id}
                            imageSourceTitle={option.imageSource}
                            title={option.title}
                            description={option.description}
                            onPress={() => handleSelect(option.id)}
                            active={selectedOption === option.id}
                        />
                    ))}

                    {selectedOption != null ? <FlatList
                        style={{ flexGrow: 0 }}
                        data={dataPlansOptions}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingLeft: 10, paddingBottom: 50 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index: fIndex }) => {
                            return (
                                <>
                                    <View style={{
                                        height: 607,
                                        marginTop: 20,
                                        marginRight: 20,
                                        paddingVertical: 30,
                                        paddingHorizontal: 20,
                                        width: 288,
                                        borderRadius: 24,
                                        backgroundColor: '#FFFFFF',
                                        shadowColor: '#AEACF3',
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowRadius: 32,
                                        elevation: 5,
                                    }}>
                                        <View style={{ marginRight: 10, padding: 0 }} >
                                            {item.isRecomended && <BorderedText text="Plan recomendado" />}
                                            <View style={[{ display: 'flex', flexDirection: 'row', }, !item.isRecomended ? { marginTop: 40 } : null]}>
                                                <View>
                                                    <Text style={{
                                                        fontFamily: 'Lato',
                                                        fontWeight: '900',
                                                        fontSize: 24,
                                                        lineHeight: 32,
                                                        letterSpacing: -0.2,
                                                        color: '#141938',
                                                        marginRight: 20
                                                    }}>
                                                        {item.title}
                                                    </Text>
                                                    <Text style={{
                                                        paddingTop: 15,
                                                        fontFamily: 'Lato',
                                                        fontWeight: '900',
                                                        fontSize: 12,
                                                        lineHeight: 16,
                                                        letterSpacing: 0.6,
                                                        color: '#7981B2',
                                                        textTransform: 'uppercase',
                                                    }}>
                                                        {item.subTitle}
                                                    </Text>
                                                    <TitleText title={item.price} />
                                                </View>
                                                <Image source={item.image} style={{ width: 56, height: 56, resizeMode: 'contain' }} />
                                            </View>
                                        </View>
                                        <Divider stylesProp={{ width: '90%' }} />
                                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                                            <DescriptionText
                                                stylesProp={{ marginVertical: 20 }} boldWords={['Médico', 'general', 'a', 'domicilio', 'Consultas', 'en', 'clínica', 'Un', 'Chequeo', 'preventivo']}
                                                text={item.description1}
                                            />
                                            <DescriptionText
                                                stylesProp={{ marginBottom: 20 }}
                                                boldWords={['Videoconsulta', 'Medicinas', 'y', 'exámenes', 'Vacunas']}
                                                text={item.description2}
                                            />
                                            <DescriptionText
                                                stylesProp={{ marginBottom: 20 }}
                                                stylesPropText={[fIndex == 2 ? { fontWeight: 'bold' } : null]}
                                                boldWords={['Indemnización', 'más', 'de', '200', 'clínicas', 'del', 'país.']}
                                                text={item.description3}
                                            />
                                        </View>
                                        <CustomButton
                                            title='Seleccionar Plan'
                                            onPress={() => { }}
                                        />
                                    </View>
                                </>
                            );
                        }}
                    /> : null}
                </View>
            </ScrollView>
        </>
    );
};

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

export default PlansScreen;
