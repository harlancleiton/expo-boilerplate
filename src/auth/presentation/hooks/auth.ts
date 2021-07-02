import React from 'react';

import { AuthContext } from '../contexts';
import { AuthContextProps } from '../contexts/Auth/types';

export function useAuth(): AuthContextProps {
  const { signIn, signOut, signed, user, loadingSignIn } = React.useContext(
    AuthContext
  );

  return { signIn, signOut, signed, user, loadingSignIn };
}
