import { NavigationProp, RouteProp } from '@react-navigation/native';

import { RecoverPassword } from '../../../domain';
import { AuthStackParamList } from '../../../main';

export interface ForgotPasswordFormData {
  email: string;
}

export interface ForgotPasswordProps {
  recoverPassword: RecoverPassword;

  navigation: NavigationProp<AuthStackParamList, 'ForgotPassword'>;
  route: RouteProp<AuthStackParamList, 'ForgotPassword'>;
}
