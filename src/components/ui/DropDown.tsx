import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface DropdownProps {
    isFocus: boolean;
    setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
    setDocumentType: React.Dispatch<React.SetStateAction<string | null>>;
    setDocumentName: React.Dispatch<React.SetStateAction<string | null>>;
    selectedValue: string | null; // Agregar esta prop
}

const DropdownComponent: React.FC<DropdownProps> = ({ isFocus, setIsFocus, setDocumentType, setDocumentName, selectedValue }) => {

    const data = [
        { label: 'DNI', value: '1' },
        { label: 'CARNET EXTRANGERIA', value: '2' },
    ];

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Seleccione' : '...'}
            value={selectedValue} // Utiliza el estado documentType aquí
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                console.log('Seleccione => ', item);
                setDocumentType(item.value);
                setDocumentName(item.label);
                setIsFocus(false);
            }}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 56,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});

export default DropdownComponent;
