import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <Routes />
    </NavigationContainer>
  );
};
