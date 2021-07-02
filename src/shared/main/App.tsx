import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '../../auth';
import { Router } from './routes/router';

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AuthProvider>
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
