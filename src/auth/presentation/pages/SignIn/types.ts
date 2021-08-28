import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList, AuthRoutes } from '../../../main';

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps {
  navigation: NavigationProp<AuthStackParamList, AuthRoutes.RecoverPassword>;
  route: RouteProp<AuthStackParamList, AuthRoutes.RecoverPassword>;
}
