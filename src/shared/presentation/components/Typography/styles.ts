import styled, { css } from 'styled-components/native';

interface TextProps {
  variant: 'h1' | 'h4' | 'h5' | 'h6' | 'h9';
}

export const Text = styled.Text<TextProps>`
  ${props =>
    props.variant === 'h1' &&
    css`
      font-weight: bold;
      font-size: 30px;
    `}

  ${props =>
    props.variant === 'h4' &&
    css`
      font-weight: 500;
      font-size: 16px;
    `}

  ${props =>
    props.variant === 'h5' &&
    css`
      font-weight: 500;
      font-size: 14px;
    `}

    ${props =>
    props.variant === 'h6' &&
    css`
      font-weight: 500;
      font-size: 12px;
    `}
`;
