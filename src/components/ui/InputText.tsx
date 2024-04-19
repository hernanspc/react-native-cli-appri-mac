import React from 'react';
import { TextInput, StyleSheet, View, ViewProps } from 'react-native';

interface CustomTextInputProps {
    hintText: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ hintText, value, onChangeText, ...props }) => {
    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder={hintText}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor="#5E6488"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#5E6488',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
});

export default CustomTextInput;
