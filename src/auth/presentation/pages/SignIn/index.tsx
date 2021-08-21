import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';

import { Input, SizedBox } from '../../../../shared';
import { useAuth } from '../../hooks';
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

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail'),
  password: yup.string().required('Informe sua senha')
});

export function SignIn() {
  const { control, handleSubmit, setFocus } = useForm<SignInFormData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { email: 'harlancleiton@gmail.com', password: '123123' }
  });

  const { signIn } = useAuth();

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
          onSubmitEditing={() => setFocus('password')}
          returnKeyType="next"
        />

        <SizedBox height={16} />

        <Input
          icon={<PasswordIcon />}
          control={control}
          name="password"
          label="Informe sua senha"
          secureTextEntry
          autoCapitalize="none"
          onSubmitEditing={handleSubmit(signIn)}
          returnKeyType="done"
        />

        <SizedBox height={24} />

        <SignInButton title="Login" onPress={handleSubmit(signIn)} />
      </FormContainer>
    </Container>
  );
}
