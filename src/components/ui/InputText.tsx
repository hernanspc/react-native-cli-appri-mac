import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChangeText, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholderTextColor="#5E6488"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 336,
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
