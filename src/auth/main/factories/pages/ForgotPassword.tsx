import React from 'react';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../..';
import { ForgotPassword } from '../../../presentation';
import { makeRecoverPassword } from '../usecases';

interface FactoryProps {
  navigation: NavigationProp<AuthStackParamList, 'ForgotPassword'>;
  route: RouteProp<AuthStackParamList, 'ForgotPassword'>;
}

export function makeForgotPassword(props: FactoryProps) {
  return <ForgotPassword {...props} recoverPassword={makeRecoverPassword()} />;
}
