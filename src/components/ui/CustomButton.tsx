import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }: { onPress: () => void; title: string }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 10,
        width: 224,
        height: 52,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FF1C44', // Cambia esto al color que desees
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff', // Color de texto blanco
    },
});

export default CustomButton;
