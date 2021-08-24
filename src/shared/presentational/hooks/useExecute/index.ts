import React from 'react';

import { AppError, InternalServerError, NetworkError } from '../../../domain';
import { useToast } from '../useToast';
import { UseCase, ExecuteHandler } from './types';

export function useExecute<UseCaseT extends UseCase>(usecase: UseCaseT) {
  const toast = useToast();

  const execute = React.useCallback<ExecuteHandler<UseCaseT['execute']>>(
    async (...args) => {
      function getErrorMessage(error: any): string {
        const errorIsInstanceOfAppError = error instanceof AppError;

        const defaultErrorMessage =
          !errorIsInstanceOfAppError && new AppError().message;

        const errorMessage = errorIsInstanceOfAppError
          ? error.message
          : defaultErrorMessage;

        return errorMessage;
      }

      function getTitleToastError(error: any): string {
        const isInternalServerError = error instanceof InternalServerError;

        if (isInternalServerError) {
          return 'Lamentamos pelo incovinente';
        }

        const isNetworkError = error instanceof NetworkError;

        if (isNetworkError) {
          return 'Sem conexão';
        }

        return 'Verifique os dados e tente novamente';
      }

      try {
        const data = await usecase.execute(...args);

        return { status: 'success', data };
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        const titleToastError = getTitleToastError(error);

        toast({
          type: 'error',
          title: titleToastError,
          message: errorMessage
        });

        return { status: 'error', error: errorMessage, data: undefined };
      }
    },
    [toast, usecase]
  );

  return execute;
}
