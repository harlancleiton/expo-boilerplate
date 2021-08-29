import { NavigationProp, RouteProp } from '@react-navigation/native';

import { ResetPassword } from '../../../domain';
import { AuthStackParamList } from '../../../main';

export interface RedefinePasswordFormData {
  password: string;
}

export interface RedefinePasswordProps {
  resetPassword: ResetPassword;

  navigation: NavigationProp<AuthStackParamList, 'RedefinePassword'>;
  route: RouteProp<AuthStackParamList, 'RedefinePassword'>;
}
