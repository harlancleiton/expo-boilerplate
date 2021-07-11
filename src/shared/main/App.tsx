import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider, makeAuthentication } from '../../auth';
import { Router } from './routes/router';

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AuthProvider authentication={makeAuthentication()}>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
