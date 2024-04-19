import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
    text: string;
    onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onPress, style, ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...props}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 56,
        borderRadius: 40,
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: '#03050F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        fontFamily: 'BR Sonoma',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2,
        color: '#FFFFFF',
    },
});

export default MyButton;
