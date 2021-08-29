import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { SizedBox } from '../../../../shared';
import {
  Container,
  HeaderImage,
  HeaderContainer,
  FormContainer,
  SubmitButton,
  GreetingContainer,
  GreetingTitle,
  GreetingText
} from './styles';
import { EmailSentProps } from './types';

export function EmailSent({ navigation }: EmailSentProps) {
  async function handleNavigateSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <StatusBar style="dark" />

      <HeaderContainer>
        <HeaderImage resizeMode="contain" resizeMethod="resize" />
      </HeaderContainer>

      <FormContainer>
        <GreetingContainer>
          <GreetingTitle variant="h1">Email enviado!</GreetingTitle>
          <GreetingText variant="h5">
            Verifique seu email, basta clicar no link que enviamos para
            cadastrar uma nova senha
          </GreetingText>
        </GreetingContainer>

        <SizedBox height={24} />

        <SubmitButton title="Ir para login" onPress={handleNavigateSignIn} />
      </FormContainer>
    </Container>
  );
}
