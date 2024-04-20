import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface PriceTextProps {
    price: string;
}

const PriceText: React.FC<PriceTextProps> = ({ price }) => {
    return (
        <Text style={styles.priceText}>
            <Text>{price} </Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    priceText: {
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.2,
        color: '#7981B2',
        textDecorationLine: 'line-through',
    },
    strikethrough: {
        textDecorationLine: 'line-through',
    },
});

export default PriceText;
