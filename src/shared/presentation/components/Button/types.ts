import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  icon?: ReactNode;
  title: string;
}
