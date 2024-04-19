import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundView from '../../components/ui/Background';
import Header from '../../components/ui/Header';
import image from '../../assets/images/family.png';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('PlansScreen' as never);
    };

    const windowWidth = Dimensions.get('window').width;

    return (
        <BackgroundView>
            <Header />

            <View style={styles.container}>
                <View style={[styles.section, { width: windowWidth / 2 - 20 }]}>
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
                <View style={[styles.section, { width: windowWidth / 2 - 20 }]}>
                    <Image source={image} style={styles.image} />
                </View>
            </View>

            <Button title='Siguiente' onPress={handleNavigate} />
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
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 8,
        // padding: 16,
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
    },
    title: {
        fontFamily: 'BR Sonoma',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 36,
        textAlign: 'justify',
        marginTop: 12,
    },
    image: {
        resizeMode: 'contain',
        borderRadius: 10,
    },
});

export default HomeScreen;
