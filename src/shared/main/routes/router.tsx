import React from 'react';

import { useAuth, AuthRouter } from '../../../auth';
import { HomeRouter } from './home';

export function Router() {
  const { signed } = useAuth();

  if (!signed) {
    return <AuthRouter />;
  }

  return <HomeRouter />;
}
