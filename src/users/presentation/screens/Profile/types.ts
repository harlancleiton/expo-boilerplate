import { NavigationProp, RouteProp } from '@react-navigation/native';

import { UserStackParamList } from '../../../main/routes';

export interface ProfileProps {
  navigation: NavigationProp<UserStackParamList, 'Profile'>;
  route: RouteProp<UserStackParamList, 'Profile'>;
}
