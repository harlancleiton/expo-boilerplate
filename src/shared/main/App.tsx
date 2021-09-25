import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import {
  LinkingOptions,
  NavigationContainer,
  PathConfigMap
} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';

import {
  AuthProvider,
  AuthStackParamList,
  makeAuthentication
} from '../../auth';
import { makeGetMe } from '../../users';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../data';
import { makeStorage } from './factories';
import { Router } from './routes/router';
import { HomeStackParamList } from './routes/types';

const prefix = Linking.createURL('/');
const config: {
  initialRouteName?: keyof (AuthStackParamList | HomeStackParamList);
  screens: PathConfigMap<AuthStackParamList | HomeStackParamList>;
} = {
  screens: {
    RedefinePassword: {
      path: 'reset-password/:token'
    }
  }
};

export function App() {
  const linking: LinkingOptions<AuthStackParamList | HomeStackParamList> = {
    prefixes: [prefix, 'https://expo-boilerplate.dev'],
    config
  };

  const storage = makeStorage();

  function clearCache() {
    return storage.clear();
  }

  function getAccessToken() {
    return storage.getItem<string>(ACCESS_TOKEN);
  }

  function removeAccessToken() {
    return storage.deleteItem(ACCESS_TOKEN);
  }

  function setAccessToken(accessToken: string) {
    return storage.setItem(ACCESS_TOKEN, accessToken);
  }

  function setRefreshToken(refreshToken: string) {
    return storage.setItem(REFRESH_TOKEN, refreshToken);
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <StatusBar style="auto" />
        <AuthProvider
          authentication={makeAuthentication()}
          clearCache={clearCache}
          getAccessToken={getAccessToken}
          getMe={makeGetMe()}
          removeAccessToken={removeAccessToken}
          setAccessToken={setAccessToken}
          setRefreshToken={setRefreshToken}
        >
          <Router />
        </AuthProvider>
        <Toast ref={Toast.setRef} topOffset={54} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
