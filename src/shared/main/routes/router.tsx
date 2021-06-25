import React from 'react';

import { AuthRouter } from '../../../auth/main/routes';

export function Router() {
  const signed = false;

  if (!signed) {
    return <AuthRouter />;
  }

  return null;
}
