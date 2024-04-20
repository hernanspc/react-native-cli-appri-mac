import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface TitleTextProps {
    title: string;
}

const TitleText = (props: TitleTextProps) => {
    const { title } = props;

    return (
        <Text style={styles.textStyle}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: -0.2,
        color: '#141938',
    },
});
export default TitleText
