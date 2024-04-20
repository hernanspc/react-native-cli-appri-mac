
import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
    title: string;
}
const SubTitleResume = (props: Props) => {
    const { title } = props;
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 6,
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.2,
    } as TextStyle,
});

export default SubTitleResume;
