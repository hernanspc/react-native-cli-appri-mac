import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundView from '../../components/ui/Background';
import Header from '../../components/ui/Header';
import image from '../../assets/images/family.png';
import Divider from '../../components/ui/Divider';
import MyButton from '../../components/ui/MyButton';
import CustomTextInput from '../../components/ui/InputText';
import Checkbox from '../../components/ui/CheckItem';
import DropdownComponent from '../../components/ui/DropDown';
import Footer from '../../components/ui/Footer';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
    const navigation = useNavigation();

    const [isFocus, setIsFocus] = useState(false);
    const [documentName, setDocumentName] = useState<string | null>(null);
    const [documentType, setDocumentType] = useState<string | null>(null);

    const [numberDocument, setNumberDocument] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [privacyPolicy, setPrivacyPolicy] = React.useState<boolean>(false);
    const [politicalCommunications, setPoliticalCommunications] = React.useState<boolean>(false);

    const [privacyPolicyError, setPrivacyPolicyError] = React.useState<boolean>(false);
    const [politicalCommunicationsError, setPoliticalCommunicationsError] = React.useState<boolean>(false);

    const handleNavigate = () => {
        console.log('privacyPolicy ', privacyPolicy);
        console.log('politicalCommunications ', politicalCommunications);

        if (!privacyPolicy || !politicalCommunications) {
            setPrivacyPolicyError(true);
            setPoliticalCommunicationsError(true);
            Alert.alert('Debes aceptar todos los términos para continuar.');
            return;
        }
        navigation.navigate('PlansScreen' as never);
    };


    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
    };

    return (

        <BackgroundView>
            <ScrollView>
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

                <View style={{ marginHorizontal: 20, paddingVertical: 25 }}>
                    <Text style={styles.subtitle}>
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[styles.containerIdentification, { marginVertical: 10 }]}>
                            <DropdownComponent
                                isFocus={isFocus}
                                setIsFocus={setIsFocus}
                                setDocumentType={setDocumentType}
                                setDocumentName={setDocumentName}
                                selectedValue={documentType} />
                        </View>
                        <CustomTextInput
                            hintText="Nro documento"
                            value={numberDocument}
                            onChangeText={setNumberDocument}
                            stylesProp={{ width: '50%', marginVertical: 10 }} // Ancho personalizado como objeto de estilo
                        />
                    </View>

                    <CustomTextInput
                        hintText="Celular"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        stylesProp={{ marginBottom: 10 }}
                    />

                    <Checkbox
                        stylesProp={{ marginVertical: 10 }}
                        label="Acepto la Política de Privacidad"
                        onChange={setPrivacyPolicy}
                        isErrorActive={privacyPolicyError}
                    />

                    <Checkbox
                        stylesProp={{ marginVertical: 10 }}
                        label="Acepto la Política Comunicaciones Comerciales"
                        onChange={setPoliticalCommunications}
                        isErrorActive={politicalCommunicationsError}
                    />

                    <Text style={{
                        fontFamily: 'BR Sonoma',
                        fontWeight: '600',
                        fontSize: 12,
                        lineHeight: 20,
                        letterSpacing: 0.1,
                        color: '#03050F',
                        marginVertical: 20,
                        textDecorationLine: 'underline',
                    }}>
                        Aplican Términos y Condiciones.
                    </Text>


                    <MyButton title="Cotiza aquí." onPress={handleNavigate} />

                </View>
                <Footer />
            </ScrollView>
        </BackgroundView>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 56,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownContainer: {
        marginRight: 8,
    },
    textInputContainer: {
        marginLeft: 8, // Agregado un margen izquierdo para separar los dos componentes
    },
    textInput: {
        height: 56,
        borderWidth: 1,
        borderColor: '#5E6488',
        borderRadius: 8,
        paddingHorizontal: 16,
    },
    containerIdentification: {
        width: '50%',
    },
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
