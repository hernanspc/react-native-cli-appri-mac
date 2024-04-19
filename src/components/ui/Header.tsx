import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logoHeader from '../../assets/logo/logo-header.png'; // Asegúrate de que la ruta a tu imagen sea correcta
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function Header() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ paddingTop: 12, paddingLeft: 24 }}>
                <Image source={logoHeader} style={{ width: 65, height: 50, resizeMode: 'contain' }} />
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome6 name="phone" size={20} color="#000" style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.phoneText}>(01) 4116001</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12, paddingRight: 24
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        alignItems: 'flex-end',
    },
    phoneText: {
        fontWeight: 'bold',
        fontFamily: 'comp-16-bold',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.4,
    },
});