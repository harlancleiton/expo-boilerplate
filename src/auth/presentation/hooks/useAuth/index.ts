import React from 'react';

import { AuthContext } from '../../contexts';

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
