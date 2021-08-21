import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider, makeAuthentication } from '../../auth';
import { ACCESS_TOKEN } from '../data';
import { makeStorage } from './factories';
import { Router } from './routes/router';

export function App() {
  function setAccessToken(accessToken: string) {
    const storage = makeStorage();
    storage.setItem(ACCESS_TOKEN, accessToken);
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AuthProvider
          authentication={makeAuthentication()}
          setAccessToken={setAccessToken}
        >
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
