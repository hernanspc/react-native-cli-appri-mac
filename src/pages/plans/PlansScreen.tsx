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
import PlanCard from '../../components/ui/PlanCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../app/slice/userSlice';
import { fetchPlans } from '../../app/slice/plansSlice';
import { calculateAge } from '../../utils/functions';

const PlansScreen = () => {
    const [progress, setProgress] = useState(0.3);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const navigation = useNavigation();

    const dispatch: any = useDispatch();

    const userData = useSelector((state: any) => state.user.data);
    const loading = useSelector((state: any) => state.user.loading);
    const error = useSelector((state: any) => state.user.error);

    // const plans = useSelector((state: any) => state.plans?.data); // Obtén los planes del estado
    const plansList = useSelector((state: any) => state.plans?.data?.list); // Obtén la lista de planes del estado
    const loadingPlans = useSelector((state: any) => state.plans?.loading);
    const errorPlans = useSelector((state: any) => state.plans?.error);


    React.useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchPlans()); // Llama a la acción para obtener los planes
    }, [dispatch]);

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

    const OptionsSection = () => {
        return (
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                {userData && (
                    <Text style={styles.headerText}>{userData.name} ¿Para quién deseas cotizar?</Text>
                )}
                <Text style={styles.descriptionText}>
                    Selecciona la opción que se ajuste más a tus necesidades.
                </Text>
            </View>
        )
    };


    const filteredPlans = useMemo(() => {
        console.log('userData:', userData);
        console.log('plansList:', plansList);
        console.log('selectedOption:', selectedOption);

        if (selectedOption === '1') {
            const filtered = plansList.filter((plan: any) => plan.age >= 34);
            console.log('Planes filtrados (mayores o iguales a 34):', filtered);
            return filtered;
        }
        if (selectedOption === '2') {
            const filtered = plansList.filter((plan: any) => plan.age >= 34).map((plan: any) => {
                const discountedPrice = plan.price * 0.95; // 5% de descuento
                return {
                    ...plan,
                    price: discountedPrice
                };
            });
            console.log('Planes filtrados (menores a 34 con descuento):', filtered);
            return filtered;
        }

        console.log('Opción seleccionada no válida.');
        return [];
    }, [selectedOption, plansList, userData]);


    return (
        <>
            <ScrollView style={{ backgroundColor: '#FAFBFF' }}>
                <SafeAreaView />
                <Header />
                <HeaderSection />
                <Divider stylesProp={{ marginHorizontal: 0 }} />
                {loading ? <Text style={styles.headerText}>...</Text> : <OptionsSection />}
                {error && <Text>Error: {error}</Text>}

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

                {/* {selectedOption != null ? <FlatList
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
                /> : null} */}
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
