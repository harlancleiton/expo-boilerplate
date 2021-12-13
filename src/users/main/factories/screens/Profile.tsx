import React from 'react';

import { NavigationProp, RouteProp } from '@react-navigation/native';

import { Profile } from '../../../presentation';
import { UserStackParamList } from '../../routes/types';
import { makeGetMe } from '../usecases';

interface FactoryProps {
  navigation: NavigationProp<UserStackParamList, 'Profile'>;
  route: RouteProp<UserStackParamList, 'Profile'>;
}

export function makeProfile(props: FactoryProps) {
  return <Profile {...props} getMe={makeGetMe()} />;
}
