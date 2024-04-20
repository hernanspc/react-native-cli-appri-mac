import React, { useMemo, useState } from 'react';
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
import PlanCard from '../../components/ui/PlanCard';

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation();

    const handleSelect = (optionId: string) => {
        setSelectedOption(optionId);
        setProgress(0.5);
    };

    const HeaderSection = () => (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo name="chevron-with-circle-left" size={24} color="#A9AFD9" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Paso 1 de 2</Text>
            <ProgressBar progress={progress} />
        </View>
    );

    const OptionsSection = () => (
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Text style={styles.headerText}>Rocío ¿Para quién deseas cotizar?</Text>
            <Text style={styles.descriptionText}>
                Selecciona la opción que se ajuste más a tus necesidades.
            </Text>
        </View>
    );

    const filteredPlans = useMemo(() => {
        if (selectedOption === '1') {
            return dataPlansOptions.slice(0, 2);
        }
        if (selectedOption === '2') {
            return dataPlansOptions.slice(3, 6);
        }
        return [];
    }, [selectedOption]);


    return (
        <>
            <ScrollView style={{ backgroundColor: '#FAFBFF' }}>
                <SafeAreaView />
                <Header />
                <HeaderSection />
                <Divider stylesProp={{ marginHorizontal: 0 }} />
                <OptionsSection />

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
                {selectedOption != null ? <FlatList
                    style={{ flexGrow: 0, marginHorizontal: 10 }}
                    data={filteredPlans}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingLeft: 10, paddingBottom: 50 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item, index: fIndex }) => {
                        return (
                            <PlanCard item={item} fIndex={fIndex} />
                        );
                    }}
                /> : null}
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
    descriptionText: {
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.1,
        color: '#000000',
    }
});

export default PlansScreen;
