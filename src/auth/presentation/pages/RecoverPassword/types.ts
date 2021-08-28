import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../../../main';

export interface RecoverPasswordFormData {
  email: string;
}

export interface RecoverPasswordProps {
  navigation: NavigationProp<AuthStackParamList, 'RecoverPassword'>;
  route: RouteProp<AuthStackParamList, 'RecoverPassword'>;
}
