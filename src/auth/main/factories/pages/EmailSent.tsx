import React from 'react';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../..';
import { EmailSent } from '../../../presentation';
import { makeRecoverPassword } from '../usecases';

interface FactoryProps {
  navigation: NavigationProp<AuthStackParamList, 'ForgotPassword'>;
  route: RouteProp<AuthStackParamList, 'ForgotPassword'>;
}

export function makeEmailSent(props: FactoryProps) {
  return <EmailSent {...props} recoverPassword={makeRecoverPassword()} />;
}
