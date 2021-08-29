import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  makeEmailSent,
  makeForgotPassword,
  makeRedefinePassword,
  makeSignIn
} from '../factories';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

export function AuthRouter() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="EmailSent" component={makeEmailSent} />
      <Stack.Screen name="ForgotPassword" component={makeForgotPassword} />
      <Stack.Screen name="RedefinePassword" component={makeRedefinePassword} />
      <Stack.Screen name="SignIn" component={makeSignIn} />
    </Stack.Navigator>
  );
}
