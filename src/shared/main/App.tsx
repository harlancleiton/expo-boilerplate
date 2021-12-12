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
import {
  clearCacheAdapter,
  getAccessTokenAdapter,
  removeAccessTokenAdapter,
  setAccessTokenAdapter,
  setRefreshTokenAdapter
} from './adapters';
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

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <StatusBar style="auto" />
        <AuthProvider
          authentication={makeAuthentication()}
          clearCache={clearCacheAdapter}
          getAccessToken={getAccessTokenAdapter}
          getMe={makeGetMe()}
          removeAccessToken={removeAccessTokenAdapter}
          setAccessToken={setAccessTokenAdapter}
          setRefreshToken={setRefreshTokenAdapter}
        >
          <Router />
        </AuthProvider>
        <Toast topOffset={54} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
