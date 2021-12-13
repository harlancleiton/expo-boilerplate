import styled from 'styled-components/native';

import { Typography } from '../Typography';

export const Container = styled.TouchableOpacity`
  background-color: #7579b5;
  height: 54px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled(Typography).attrs({ variant: 'h9' })`
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
