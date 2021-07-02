import React from 'react';

import { AuthRouter, useAuth } from '../../../auth';

export function Router() {
  const { signed } = useAuth();

  if (!signed) {
    return <AuthRouter />;
  }

  return null;
}
