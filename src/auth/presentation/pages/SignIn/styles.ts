import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import SignInImg from '../../../../../assets/header-signin-page.png';
import { Button, Typography } from '../../../../shared';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 }
})`
  flex: 1;
  background-color: #ffeeeb;
`;

export const HeaderImage = styled.Image.attrs({ source: SignInImg })`
  height: 400px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 32px;
  padding-horizontal: 16px;
`;

export const SignInButton = styled(Button)``;

export const GreetingContainer = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;

export const GreetingTitle = styled(Typography)`
  padding-bottom: 5px;
  color: #191a2e;
`;

export const GreetingText = styled(Typography)`
  padding-bottom: 5px;
  color: #a7a7af;
`;

export const MailIcon = styled(MaterialIcons).attrs({
  name: 'mail',
  size: 24,
  color: '#D2695C'
})``;

export const PasswordIcon = styled(MaterialIcons).attrs({
  name: 'lock',
  size: 24,
  color: '#D2695C'
})``;
