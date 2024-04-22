import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TitleText from './TitleText';
import DescriptionText from './BoldText';
import CustomButton from './CustomButton';
import BorderedText from './BorderedText';
import { useNavigation } from '@react-navigation/native';
import Divider from './Divider';
import LastPriceText from './LastPriceText';

interface PlanCardProps {
    item: any;
    fIndex: number;
}

const PlanCard: React.FC<PlanCardProps> = ({ item, fIndex }) => {
    const navigation = useNavigation();

    const handleSelectPlan = () => {
        navigation.navigate('ResumeScreen' as never);
    };

    return (
        <View style={styles.planCard}>
            <View style={{ marginRight: 10, padding: 0 }} >
                {item.isRecomended && <BorderedText text="Plan recomendado" />}
                <View style={[{ display: 'flex', flexDirection: 'row', }, !item.isRecomended ? { marginTop: 40 } : null]}>
                    <View>
                        <Text style={styles.title}>
                            {item.name}
                        </Text>

                        <Text style={styles.subTitle}>
                            {item.subTitle}
                        </Text>
                        {item.lastPrice && <LastPriceText price={`$ ${item.lastPrice} antes`} />}
                        <TitleText title={`$ ${item.price}`} />
                    </View>
                    <Image source={item.image} style={{ width: 56, height: 56, resizeMode: 'contain' }} />
                </View>
            </View>
            <Divider stylesProp={{ width: '90%', marginTop: 25 }} />
            {/* <View style={{ display: 'flex', flexDirection: 'column' }}>
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
            </View> */}
            <CustomButton
                title='Seleccionar Plan'
                onPress={handleSelectPlan}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    planCard: {
        height: 667,
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
        shadowOpacity: 0.35,
        shadowRadius: 32,
        elevation: 5,
    },
    title: {
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.2,
        color: '#141938',
        marginRight: 20
    },
    subTitle: {
        paddingTop: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: '900',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.6,
        color: '#7981B2',
        textTransform: 'uppercase',
    },
    image: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    },
});

export default PlanCard;
