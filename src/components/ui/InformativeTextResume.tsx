import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
    title: string;
}

const InformativeTextResume = (props: Props) => {
    const { title } = props;
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.1,
        marginVertical: 2,
    } as TextStyle,
});

export default InformativeTextResume;
