import React from 'react';

import { Container, Title } from './styles';
import { LinkButtonProps } from './types';

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
