import React from 'react';
import { Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';

interface DescriptionTextProps {
    boldWords: string[];
    text: string;
    stylesProp?: StyleProp<ViewStyle>;
    stylesPropText?: StyleProp<TextStyle>;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ boldWords, text, stylesProp, stylesPropText }) => {
    const words = text.split(' ');

    return (
        <Text style={[styles.textStyle, stylesProp]}>
            {words.map((word, index) => (
                <Text key={index} style={[boldWords.includes(word) ? styles.boldText : styles.regularText, stylesPropText]}>
                    {word}{' '}
                </Text>
            ))}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.1,
        color: '#141938',
    },
    boldText: {
        fontFamily: 'Lato',
        fontWeight: '700',
        color: '#141938',
    },
    regularText: {
        fontFamily: 'Lato',
        fontWeight: '400',
        color: '#141938',
    },
});

export default DescriptionText;
