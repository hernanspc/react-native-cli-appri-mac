import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundView from '../../components/ui/Background';
import Header from '../../components/ui/Header';
import image from '../../assets/images/family.png';
import Divider from '../../components/ui/Divider';
import MyButton from '../../components/ui/MyButton';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('PlansScreen' as never);
    };

    return (
        <BackgroundView>
            <Header />


            <View style={styles.container}>
                <View style={[styles.section, { width: windowWidth / 2 }]}>
                    <LinearGradient
                        colors={['#00F4E2', '#00FF7F']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.linearGradient}
                    >
                        <Text style={styles.text}>Seguro Salud Flexible</Text>
                    </LinearGradient>
                    <Text style={styles.title}>Creado para ti y tu familia</Text>

                </View>

                <View style={[styles.section, styles.imageContainer]}>
                    <Image source={image} style={styles.image} />
                </View>
            </View>

            <Divider />

            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.subtitle}>
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
                </Text>

                <MyButton text="Cotiza aquí" onPress={handleNavigate} />

            </View>

        </BackgroundView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    section: {
        borderRadius: 8,
        padding: 12,
    },
    linearGradient: {
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.3,
        color: 'black',
    },
    title: {
        fontFamily: 'BR Sonoma',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 36,
        textAlign: 'justify',
        marginTop: 12,
        color: 'black',
    },
    image: {
        resizeMode: 'contain',
        borderRadius: 10,
    },
    imageContainer: {
        width: windowWidth / 2 - 20,
        alignItems: 'flex-end', // Alinea la imagen a la izquierda
    },
    subtitle: {
        fontFamily: 'BR Sonoma',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2,
        color: 'black',
    },
});

export default HomeScreen;
