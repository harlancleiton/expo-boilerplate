import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../presentational';
import { HomeStackParamList } from './types';

const Stack = createStackNavigator<HomeStackParamList>();

export function HomeRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
