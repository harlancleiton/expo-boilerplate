import styled, { css } from 'styled-components/native';

import { SizedBoxProps } from './types';

export const SizedBox = styled.View<SizedBoxProps>`
  height: 8px;

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;
