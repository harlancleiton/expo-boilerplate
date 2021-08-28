import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';

import { Input, SizedBox } from '../../../../shared';
import {
  Container,
  HeaderImage,
  HeaderContainer,
  FormContainer,
  SubmitButton,
  GreetingContainer,
  GreetingTitle,
  GreetingText,
  MailIcon
} from './styles';
import { RecoverPasswordFormData } from './types';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Informe seu e-mail')
});

export function RecoverPassword() {
  const { control, handleSubmit: handleSubmitFromForm } =
    useForm<RecoverPasswordFormData>({
      mode: 'onBlur',
      resolver: yupResolver(schema),
      defaultValues: { email: 'harlancleiton@gmail.com' }
    });

  function handleSubmit({ email }: RecoverPasswordFormData) {
    console.log('email: ', email);
  }

  return (
    <Container>
      <StatusBar style="dark" />

      <HeaderContainer>
        <HeaderImage resizeMode="contain" resizeMethod="resize" />
      </HeaderContainer>

      <FormContainer>
        <GreetingContainer>
          <GreetingTitle variant="h1">Esqueceu sua senha?</GreetingTitle>
          <GreetingText variant="h5">
            Insira o seu email e enviaremos um link para você voltar a acessar a
            sua conta.
          </GreetingText>
        </GreetingContainer>

        <Input
          icon={<MailIcon />}
          control={control}
          name="email"
          label="Informe seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          onSubmitEditing={handleSubmitFromForm(handleSubmit)}
          returnKeyType="done"
        />

        <SizedBox height={24} />

        <SubmitButton
          title="Enviar link"
          onPress={handleSubmitFromForm(handleSubmit)}
        />
      </FormContainer>
    </Container>
  );
}
