import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CheckboxProps {
    label: string;
    onChange?: (isChecked: boolean) => void;
    stylesProp?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, stylesProp }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isErrorActive, setIsErrorActive] = useState(false);

    const toggleCheckbox = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (onChange) {
            onChange(newCheckedState);
        }
    };

    console.log('errorActive s', isErrorActive);

    return (
        <TouchableOpacity
            style={[
                styles.checkboxContainer,
                stylesProp,
                isErrorActive && styles.error
            ]}
            onPress={toggleCheckbox}
        >
            <View style={styles.checkbox}>
                {isChecked &&
                    <View style={styles.checkboxInner}>
                        <FontAwesome name="check" size={16} color="white" />
                    </View>}
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#5E6488',
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxInner: {
        width: 24,
        height: 24,
        backgroundColor: '#000',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        borderColor: 'red', // Cambia el borde a rojo para indicar error
    },
});

export default Checkbox;
