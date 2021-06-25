import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { makeHome } from '../../factories';
import { Routes } from './routes';

export function AuthRouter() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={makeHome} />
    </Stack.Navigator>
  );
}
