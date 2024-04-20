import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/ui/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from '../../components/ui/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/ui/Divider';
import Card from '../../components/ui/Card';
import formMe from '../../assets/images/form-me.png';
import others from '../../assets/images/others.png';

interface Option {
    id: string;
    title: string;
    description: string;
    imageSource: any;
}

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation();

    const options: Option[] = [
        {
            id: '1',
            title: 'Para mi',
            description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
            imageSource: formMe,
        },
        {
            id: '2',
            title: 'Para alguien más',
            description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
            imageSource: others,
        },
    ];

    const handleSelect = (optionId: string) => {
        setSelectedOption(optionId);
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
