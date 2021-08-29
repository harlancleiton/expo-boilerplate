import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../../../main';

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps {
  navigation: NavigationProp<AuthStackParamList, 'SignIn'>;
  route: RouteProp<AuthStackParamList, 'SignIn'>;
}
