import React from 'react';
import { useForm } from 'react-hook-form';

import { StatusBar } from 'expo-status-bar';

import { Input, SizedBox } from '../../../../shared/presentational';
import {
  Container,
  HeaderImage,
  HeaderContainer,
  FormContainer,
  SignInButton,
  GreetingContainer,
  GreetingTitle,
  GreetingText,
  MailIcon,
  PasswordIcon
} from './styles';
import { SignInFormData } from './types';

export function SignIn() {
  const { control, handleSubmit } = useForm<SignInFormData>();

  function signIn({ email, password }: SignInFormData) {
    console.log('SignIn: ', { email, password });
  }

  return (
    <Container>
      <StatusBar style="dark" />

      <HeaderContainer>
        <HeaderImage resizeMode="contain" resizeMethod="resize" />
      </HeaderContainer>

      <FormContainer>
        <GreetingContainer>
          <GreetingTitle variant="h1">Identifique-se</GreetingTitle>
          <GreetingText variant="h6">
            Oi! Bem vindo de volta ao Clearo.
          </GreetingText>
        </GreetingContainer>

        <Input
          icon={<MailIcon />}
          control={control}
          name="email"
          label="Informe seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <SizedBox height={16} />

        <Input
          icon={<PasswordIcon />}
          control={control}
          name="password"
          label="Informe sua senha"
          secureTextEntry
          autoCapitalize="none"
        />

        <SizedBox height={24} />

        <SignInButton title="Login" onPress={handleSubmit(signIn)} />
      </FormContainer>
    </Container>
  );
}
