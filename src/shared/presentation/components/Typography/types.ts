import { TextProps } from 'react-native';

export interface TypographyProps extends TextProps {
  variant: 'h1' | 'h4' | 'h5' | 'h6' | 'h9';
}
