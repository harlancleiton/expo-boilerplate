import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../../../auth';
import { Button, LinkButton } from '../../presentational';
import { HomeStackParamList } from './types';

const Stack = createStackNavigator<HomeStackParamList>();

export function HomeRouter() {
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
            <LinkButton
              title="Esqueceu sua senha?"
              onPress={() => {
                console.log('onPress');
              }}
            />
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
