import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundView from '../../components/ui/Background';
import Header from '../../components/ui/Header';
import image from '../../assets/images/family.png';
import Divider from '../../components/ui/Divider';
import MyButton from '../../components/ui/MyButton';
import CustomTextInput from '../../components/ui/InputText';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Dropdown } from 'react-native-element-dropdown';


const windowWidth = Dimensions.get('window').width;



const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        console.log('Button pressed');
        navigation.navigate('PlansScreen' as never);
    };

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (text: string) => {
        setPhoneNumber(text);
    };


    const CustomDropdown: React.FC = () => {

        const data = [
            { label: 'DNI', value: '1' },
            { label: 'CARNET EXTRANGERIA', value: '2' },
        ];

        const [isFocus, setIsFocus] = useState(false);
        const [documentName, setDocumentName] = useState<string | null>(null);
        const [documentType, setDocumentType] = useState<string | null>(null);


        return (
            <View style={styles.containerDropdown}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Seleccione' : '...'}
                    value={documentType}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        console.log('Seleccione => ', item);
                        setDocumentType(item.value);
                        setDocumentName(item.label);
                        setIsFocus(false);
                    }}
                />
            </View>
        );
    };


    const CustomTextInputDocument: React.FC = () => {
        const [text, setText] = useState('');

        return (
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="12345678"
                    value={text}
                    onChangeText={setText}
                />
            </View>
        );
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

            <View style={{ marginHorizontal: 20, paddingVertical: 30 }}>
                <Text style={styles.subtitle}>
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
                </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.containerIdentification}>
                    <CustomDropdown />
                </View>
                <CustomTextInput
                    hintText="Celular"
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                />
            </View>

            <CustomTextInput
                hintText="Celular"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
            />

            <MyButton title="Cotiza aquí." onPress={handleNavigate} />

        </BackgroundView>
    );
};

const styles = StyleSheet.create({
    containerDropdown: {
        // padding: 16,
    },
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
        // flexDirection: 'row',
        // display: 'flex',
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
