import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
    progress: number; // Valor de progreso entre 0 y 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 212,
        height: 6,
        borderRadius: 20,
        backgroundColor: '#D7DBF5',
    },
    progressBar: {
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#4F4FFF', // Cambiar al color deseado
    },
});

export default ProgressBar;
