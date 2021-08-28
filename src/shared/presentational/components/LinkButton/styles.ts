import { lighten } from 'polished';
import styled from 'styled-components/native';

import { Typography } from '../Typography';

export const Container = styled.TouchableHighlight.attrs({
  activeOpacity: 1,
  underlayColor: lighten(0.35, '#d2695c')
})`
  padding: 10px;
  /* justify-content: center;
  align-items: center; */
  border-radius: 8px;
`;

export const Title = styled(Typography).attrs({ variant: 'h9' })`
  text-align: center;
  font-weight: bold;
  color: #d2695c;
`;
