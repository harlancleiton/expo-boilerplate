import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../../../auth';
import { Button, usePromise } from '../../../../shared';
import { ProfileProps } from './types';

export function Profile({ getMe }: ProfileProps) {
  const { signOut } = useAuth();

  const { status, error, data } = usePromise(getMe.execute());

  React.useEffect(() => {
    console.log('{ status, error, data }: ', { status, error, data });
  }, [data, error, status]);

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
