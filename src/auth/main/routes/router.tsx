import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { makeSignIn } from '../factories';
import { Routes } from './routes';

export function AuthRouter() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.SignIn} component={makeSignIn} />
    </Stack.Navigator>
  );
}
