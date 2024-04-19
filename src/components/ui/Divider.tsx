import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
    divider: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCD1EE',
    },
});

export default Divider;
