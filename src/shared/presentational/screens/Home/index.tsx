import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '../../../../auth/presentation/hooks/useAuth';
import { makeGetMe } from '../../../../users/main';
import { Button, LinkButton } from '../../components';

export function Home() {
  const { signOut } = useAuth();

  const getMe = makeGetMe();

  async function getMeA() {
    console.log('getMeA');
    try {
      const response = await getMe.execute();
      console.log('responseA: ', response);
    } catch (error) {
      console.log('errorA: ', error);
    }
  }

  async function getMeB() {
    console.log('getMeB');
    try {
      const response = await getMe.execute();
      console.log('responseB: ', response);
    } catch (error) {
      console.log('errorB: ', error);
    }
  }

  function handlePress() {
    getMeA();
    getMeB();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Bem vindo de volta</Text>

      <Button onPress={handlePress} title="GetMe" />
      <Button onPress={signOut} title="Sair" />
      <LinkButton
        title="Esqueceu sua senha?"
        onPress={() => {
          console.log('onPress');
        }}
      />
    </View>
  );
}
