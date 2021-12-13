import { NavigationProp, RouteProp } from '@react-navigation/native';

import { GetMe } from '../../../domain';
import { UserStackParamList } from '../../../main/routes';

export interface ProfileProps {
  getMe: GetMe;
  navigation: NavigationProp<UserStackParamList, 'Profile'>;
  route: RouteProp<UserStackParamList, 'Profile'>;
}
