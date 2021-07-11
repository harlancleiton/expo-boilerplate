import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

export function HomeRouter() {
  const Stack = createStackNavigator();

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
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
