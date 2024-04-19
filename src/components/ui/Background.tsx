import React, { ReactNode } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, StatusBar, Platform } from 'react-native';

interface BackgroundViewProps {
    children?: ReactNode;
}

const BackgroundView: React.FC<BackgroundViewProps> = ({ children }) => {
    return (
        <View style={[styles.container, Platform.OS == 'android' ? { paddingTop: 20 } : null]}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <SafeAreaView />


            <ImageBackground
                source={require('../../assets/background/blur-asset1.png')}
                style={styles.topBackground}
            />

            <ImageBackground
                source={require('../../assets/background/blur-asset-left.png')}
                style={styles.bottomBackground}
            />
            {children}
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
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    bottomBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
});

export default BackgroundView;
