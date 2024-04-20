import React from 'react';
import { TextInput, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

interface CustomTextInputProps {
    hintText: string;
    value?: string;
    onChangeText?: (text: string) => void;
    stylesProp?: StyleProp<ViewStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ hintText, value, onChangeText, stylesProp, ...props }) => {
    return (
        <View style={[styles.container, stylesProp]} {...props}>
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
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#5E6488',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 16, // Añadido un padding para el texto
    },
});

export default CustomTextInput;
