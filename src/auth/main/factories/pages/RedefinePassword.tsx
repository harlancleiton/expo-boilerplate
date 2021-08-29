import React from 'react';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../..';
import { RedefinePassword } from '../../../presentation';
import { makeResetPassword } from '../usecases';

interface FactoryProps {
  navigation: NavigationProp<AuthStackParamList, 'RedefinePassword'>;
  route: RouteProp<AuthStackParamList, 'RedefinePassword'>;
}

export function makeRedefinePassword(props: FactoryProps) {
  return <RedefinePassword {...props} resetPassword={makeResetPassword()} />;
}
