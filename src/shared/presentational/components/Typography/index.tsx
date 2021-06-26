import React from 'react';

import { Text } from './styles';
import { TypographyProps } from './types';

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...rest
}) => {
  return <Text {...rest}>{children}</Text>;
};
