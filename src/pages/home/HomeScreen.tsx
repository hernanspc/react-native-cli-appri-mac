import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
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
import { useDispatch } from 'react-redux';
import { setNrodoc, setPhone } from '../../app/slice/userInfoSlice';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
    const navigation = useNavigation();

    const [isFocus, setIsFocus] = useState(false);
    const [documentName, setDocumentName] = useState<string | null>(null);
    const [documentType, setDocumentType] = useState<string | null>(null);

    const [numberDocument, setNumberDocument] = useState('');
    // const [numberDocument, setNumberDocument] = useState('30216147');
    const [numberDocumentError, setNumberDocumentError] = React.useState<boolean>(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('5130216147');
    const [phoneNumberError, setPhoneNumberError] = React.useState<boolean>(false);

    const [privacyPolicy, setPrivacyPolicy] = React.useState<boolean>(false);
    const [politicalCommunications, setPoliticalCommunications] = React.useState<boolean>(false);

    const [privacyPolicyError, setPrivacyPolicyError] = React.useState<boolean>(false);
    const [politicalCommunicationsError, setPoliticalCommunicationsError] = React.useState<boolean>(false);

    const dispatch: any = useDispatch();

    const handleNavigate = () => {

        if (!privacyPolicy || !politicalCommunications || numberDocument.length === 0 || phoneNumber.length === 0 || documentType == null) {
            if (!privacyPolicy || !politicalCommunications) {
                setPrivacyPolicyError(true);
                setPoliticalCommunicationsError(true);
            }
            if (numberDocument.length === 0) {
                setNumberDocumentError(true);
            }
            if (phoneNumber.length === 0) {
                setPhoneNumberError(true);
            }
            if (documentType == null) {
                Alert.alert('Selecciona el tipo de documento');
            }
            return;
        } else {
            if (numberDocument === '30216147' && phoneNumber === '5130216147') {
                dispatch(setPhone('5130216147'));
                dispatch(setNrodoc('30216147'));

                setPrivacyPolicyError(false);
                setPoliticalCommunicationsError(false);
                setNumberDocumentError(false);
                setPhoneNumberError(false);

                setNumberDocument('');
                setPhoneNumber('');
                navigation.navigate('PlansScreen' as never);
            } else {
                Alert.alert('El usuario ingresado no existe');
                return;
            }
        }

    };



    const handleNroDocumentChange = (text: string) => {
        setNumberDocument(text);
        setNumberDocumentError(false);
    };

    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
        setPhoneNumberError(false);
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
                            errorInput={numberDocumentError}
                            hintText="Nro documento"
                            value={numberDocument}
                            onChangeText={handleNroDocumentChange}
                            stylesProp={{ width: '50%', marginVertical: 10 }} // Ancho personalizado como objeto de estilo
                        />
                    </View>

                    <CustomTextInput
                        errorInput={phoneNumberError}
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
