import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BorderedText = ({ text }: { text: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 132,
        height: 20,
        borderRadius: 6,
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: '#7DF0BA', // Cambia esto al color que desees
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000', // Color de texto negro
    },
});

export default BorderedText;
