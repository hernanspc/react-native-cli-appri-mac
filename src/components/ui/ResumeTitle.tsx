import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
    title: string;
}

const ResumeTitle: React.FC<Props> = ({ title }) => {
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
        textAlign: 'center',
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: -0.6,
        color: '#141938',
    } as TextStyle,
});

export default ResumeTitle;
