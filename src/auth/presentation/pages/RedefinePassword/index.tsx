import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { StatusBar } from 'expo-status-bar';
import * as yup from 'yup';

import { Input, SizedBox, useExecute, useToast } from '../../../../shared';
import {
  Container,
  HeaderImage,
  HeaderContainer,
  FormContainer,
  SubmitButton,
  GreetingContainer,
  GreetingTitle,
  GreetingText,
  PasswordIcon
} from './styles';
import { RedefinePasswordFormData, RedefinePasswordProps } from './types';

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Pelo menos 6 caracteres')
    .required('Informe a nova senha')
});

export function RedefinePassword({
  navigation,
  resetPassword,
  route
}: RedefinePasswordProps) {
  const { token } = route.params;
  const [, setLoading] = React.useState(false);

  const { control, handleSubmit: handleSubmitFromForm } =
    useForm<RedefinePasswordFormData>({
      mode: 'onBlur',
      resolver: yupResolver(schema)
    });

  const redefinePasswordExecute = useExecute(resetPassword);
  const toast = useToast();

  async function handleSubmit({ password }: RedefinePasswordFormData) {
    setLoading(true);
    const response = await redefinePasswordExecute({ password, token });
    setLoading(false);

    if (response.status === 'error') return;

    toast({
      type: 'success',
      title: 'Senha redefinida',
      message: 'Faça login e volte a aproveitar o Clearo'
    });
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
          <GreetingTitle variant="h1">Quase lá!</GreetingTitle>
          <GreetingText variant="h5">Informe uma nova senha</GreetingText>
        </GreetingContainer>

        <Input
          icon={<PasswordIcon />}
          control={control}
          name="password"
          label="Informe a nova senha"
          secureTextEntry
          autoCapitalize="none"
          onSubmitEditing={handleSubmitFromForm(handleSubmit)}
          returnKeyType="done"
        />

        <SizedBox height={24} />

        <SubmitButton
          title="Redefinir senha"
          onPress={handleSubmitFromForm(handleSubmit)}
        />
      </FormContainer>
    </Container>
  );
}
