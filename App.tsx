import React from 'react';
import { Provider } from 'react-redux';
import HomeStack from './src/pages/stack/HomeStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './src/app/store/store'

export default function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  );
}
