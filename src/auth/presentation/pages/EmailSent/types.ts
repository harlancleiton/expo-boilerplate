import { NavigationProp, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../../../main';

export interface EmailSentProps {
  navigation: NavigationProp<AuthStackParamList, 'ForgotPassword'>;
  route: RouteProp<AuthStackParamList, 'ForgotPassword'>;
}
