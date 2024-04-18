import React, { ReactNode } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

interface BackgroundViewProps {
    children?: ReactNode;
}

const BackgroundView: React.FC<BackgroundViewProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/background/blur-asset1.png')}
                style={styles.topBackground}
            />
            <SafeAreaView>
                {children}
            </SafeAreaView>
            <ImageBackground
                source={require('../../assets/background/blur-asset-left.png')}
                style={styles.bottomBackground}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FF',
    },
    topBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    bottomBackground: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
});

export default BackgroundView;
