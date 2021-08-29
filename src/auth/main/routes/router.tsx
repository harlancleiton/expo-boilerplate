import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { makeForgotPassword, makeSignIn } from '../factories';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={makeSignIn} />
      <Stack.Screen name="ForgotPassword" component={makeForgotPassword} />
    </Stack.Navigator>
  );
}
