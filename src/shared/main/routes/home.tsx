import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../../../auth';
import { Button } from '../../presentational';

export function HomeRouter() {
  const Stack = createStackNavigator();

  const { signOut } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Bem vindo de volta</Text>

            <Button onPress={signOut} title="Sair" />
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
