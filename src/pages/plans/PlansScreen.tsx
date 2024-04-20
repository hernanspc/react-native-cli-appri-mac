import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../../components/ui/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressBar from '../../components/ui/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Divider from '../../components/ui/Divider';
import Card from '../../components/ui/Card';
import { options } from '../../utils/optionsPlans';

interface PlansOption {
    id: string;
    title: string;
    subTitle: string;
    price: string;
    description1: string;
    description2: string;
    description3: string;
}

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation();

    const plansOptions: PlansOption[] = [
        {
            id: '1',
            title: 'Plan en Casa',
            subTitle: 'Costo del plan',
            price: '$39 al mes',
            description1: 'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
            description2: 'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
            description3: 'Indemnización de S/300 en caso de hospitalización por más de un día.',
        },
        {
            id: '2',
            title: 'Plan en Casa y Clinica',
            subTitle: 'Costo del plan',
            price: '$99 al mes',
            description1: 'Consultas en clínica para cualquier especialidad.',
            description2: 'Medicinas y exámenes derivados cubiertos al 80%',
            description3: 'Atención médica en más de 200 clínicas del país.',
        },
        {
            id: '3',
            title: 'Plan en Casa + Checkeo',
            subTitle: 'Costo del plan',
            price: '$49 al mes',
            description1: 'Un Chequeo preventivo general de manera presencial o virtual.',
            description2: 'Acceso a Vacunas en el Programa del MINSA en centros privados. ',
            description3: 'Incluye todos los beneficios del Plan en Casa. ',
        },
    ];

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

                    <FlatList
                        style={{ flexGrow: 0 }}
                        data={plansOptions}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingLeft: 10 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({ item, index: fIndex }) => {
                            return (
                                <TouchableOpacity>
                                    <View style={{ marginRight: 10, padding: 10 }} >
                                        <Text>{item.title}</Text>

                                    </View>
                                </TouchableOpacity>
                            )
                        }}

                    />
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
