import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import radioUnselect from '../../assets/images/radio-unselect.png';

interface CardProps {
    onPress?: () => void;
}

const Card = (props: CardProps) => {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={{ justifyContent: 'flex-end' }}>
                <Image source={radioUnselect} style={{ width: 24, height: 24 }} />
            </View>
            <Text style={{
                fontFamily: 'Lato',
                fontWeight: '900',
                fontSize: 20,
                lineHeight: 28,
                letterSpacing: -0.2,
                color: '#141938',
            }}>Para mi</Text>
            <Text style={{
                fontFamily: 'Lato',
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 20,
                letterSpacing: 0.2,
                color: '#141938',
            }}>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        paddingVertical: 20,
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
