import React from 'react';

import { AuthContext } from '../contexts';
import { AuthContextProps } from '../contexts/Auth/types';

export function useAuth(): AuthContextProps {
  const context = React.useContext(AuthContext);

  return context;
}
