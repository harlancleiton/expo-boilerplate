import React from 'react';

import { useAuth, AuthRouter } from '../../../auth';
import { UserRouter } from '../../../users';

export function Router() {
  const { signed } = useAuth();

  if (!signed) {
    return <AuthRouter />;
  }

  return <UserRouter />;
}
