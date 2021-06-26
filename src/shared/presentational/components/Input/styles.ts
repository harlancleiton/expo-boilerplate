import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { ContentProps } from './types';

export const Container = styled.Pressable`
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 8px;
  background-color: #f5f5f5;
  height: 72px;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View<ContentProps>`
  flex: 1;

  ${props =>
    props.hasIcon &&
    css`
      margin-left: 16px;
    `}
`;

export const Label = styled.Text`
  color: #a7a7af;
  font-weight: 500;
  font-size: 12px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
`;

export const EyeIcon = styled(MaterialCommunityIcons).attrs({
  name: 'eye',
  size: 24,
  color: '#A7A7AF'
})``;

export const EyeOffIcon = styled(MaterialCommunityIcons).attrs({
  name: 'eye-off',
  size: 24,
  color: '#A7A7AF'
})``;

export const Error = styled.Text`
  color: #d2695c;
  font-weight: 500;
  font-size: 12px;
`;
