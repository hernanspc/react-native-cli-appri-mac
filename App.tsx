import React from 'react';
import HomeStack from './src/pages/stack/HomeStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Wrapper() {
  return (
    <App />
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  );
}
