import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import radioUnselect from '../../assets/images/radio-unselect.png';
import radioSelect from '../../assets/images/radio-select.png';
import TitleText from './TitleText';

interface CardProps {
    onPress?: () => void;
    title: string;
    description: string;
    stylesProp?: StyleProp<ViewStyle>;
    imageSourceTitle: ImageSourcePropType; // Definición del tipo de la imagen
    active: boolean;
}

const Card = (props: CardProps) => {
    const { onPress, title, description, stylesProp, imageSourceTitle, active } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, stylesProp, active ? { borderWidth: 3 } : null]}>
            <View style={{ alignItems: 'flex-end' }}>
                <Image source={active ? radioSelect : radioUnselect} style={{ width: 24, height: 24 }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image source={imageSourceTitle} style={{ width: 32, height: 32, marginRight: 10 }} />
                <TitleText title={title} />
            </View>

            <Text style={{
                fontFamily: 'Lato',
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 20,
                letterSpacing: 0.2,
                color: '#141938',
                marginVertical: 10,
            }}>{description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        display: 'flex',
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
});

export default Card;
