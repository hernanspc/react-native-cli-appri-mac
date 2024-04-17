import React from 'react'
import HomeStack from './src/pages/stack/HomeStack';

export default function Wrapper() {
  return (
    // <Provider store={store}>
    <App />
    // </Provider>
  );
}

function App() {
  return (
    <HomeStack />
  )
} 