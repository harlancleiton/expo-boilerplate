import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider, makeAuthentication } from '../../auth';
import { makeGetMe } from '../../users';
import { ACCESS_TOKEN } from '../data';
import { makeStorage } from './factories';
import { Router } from './routes/router';

export function App() {
  const storage = makeStorage();

  function clearStorage() {
    return storage.clear();
  }

  function setAccessToken(accessToken: string) {
    return storage.setItem(ACCESS_TOKEN, accessToken);
  }

  function getAccessToken() {
    return storage.getItem<string>(ACCESS_TOKEN);
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AuthProvider
          authentication={makeAuthentication()}
          clearStorage={clearStorage}
          getAccessToken={getAccessToken}
          getMe={makeGetMe()}
          setAccessToken={setAccessToken}
        >
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
