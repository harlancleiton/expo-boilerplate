import React from 'react';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../..';
import { SignIn } from '../../../presentation';

interface FactoryProps {
  navigation: NavigationProp<AuthStackParamList, 'SignIn'>;
  route: RouteProp<AuthStackParamList, 'SignIn'>;
}

export function makeSignIn(props: FactoryProps) {
  return <SignIn {...props} />;
}
