import { View, Text, Button, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BackgroundView from '../../components/ui/Background';
import logoHeader from '../../assets/logo/logo-header.png'; // Asegúrate de que la ruta a tu imagen sea correcta
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('PlansScreen' as never);
    }

    return (
        <BackgroundView>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ paddingTop: 12, paddingLeft: 24 }}>
                    <Image source={logoHeader} style={{ width: 65, height: 50, resizeMode: 'contain' }} />
                </View>
                <View style={styles.infoContainer}>
                    <Icon name="phone" size={20} color="#000" style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.phoneText}>(01) 4116001</Text>
                    </View>
                </View>
            </View>

            <Button title='next' onPress={handleNavigate} />

        </BackgroundView >
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    phoneName: {
        fontFamily: 'comp-16-bold',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.4,
        color: '#888', // Color de ejemplo, ajusta según lo necesario
    },
});