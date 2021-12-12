import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../../../auth';
import { Button } from '../../../../shared';

export function Profile() {
  const { signOut } = useAuth();

  return (
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
  );
}
