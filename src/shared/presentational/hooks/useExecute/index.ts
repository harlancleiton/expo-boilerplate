import React from 'react';

import { AppError } from '../../../domain';
import { useToast } from '../useToast';
import { UseCase, ExecuteHandler } from './types';

export function useExecute<UseCaseT extends UseCase>(usecase: UseCaseT) {
  const toast = useToast();

  const execute = React.useCallback<ExecuteHandler<UseCaseT['execute']>>(
    async (...args) => {
      try {
        const data = await usecase.execute(...args);

        return { status: 'success', data };
      } catch (_error) {
        const error = _error instanceof AppError ? _error : new AppError();

        toast({
          type: 'error',
          title: error.title,
          message: error.message
        });

        return { status: 'error', error: error.message, data: undefined };
      }
    },
    [toast, usecase]
  );

  return execute;
}
