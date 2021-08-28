import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { makeSignIn } from '../factories';
import { AuthRoutes } from './routes';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthRoutes.SignIn} component={makeSignIn} />
    </Stack.Navigator>
  );
}
