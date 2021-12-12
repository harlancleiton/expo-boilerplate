import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { makeProfile } from '../factories/screens';
import { UserStackParamList } from './types';

const Stack = createStackNavigator<UserStackParamList>();

export function UserRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={makeProfile} />
    </Stack.Navigator>
  );
}
