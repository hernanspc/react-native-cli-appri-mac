// Footer.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Divider from '../../components/ui/Divider';
import logo from '../../assets/logo/logo-footer.png'; // Asegúrate de importar tu imagen de logo

const Footer = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Divider />
            <Text style={styles.text}>© 2023 RIMAC Seguros y Reaseguros.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 152,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    logo: {
        marginBottom: 24,
    },
    text: {
        fontFamily: 'BR Sonoma',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: '#FFFFFF',
    },
});

export default Footer;
