import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface DividerProps {
    stylesProp?: ViewStyle;
}

const Divider = (props: DividerProps) => {
    const { stylesProp } = props;
    return <View style={[styles.divider, stylesProp]}></View>;
};

const styles = StyleSheet.create({
    divider: {
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCD1EE',
    },
});

export default Divider;
