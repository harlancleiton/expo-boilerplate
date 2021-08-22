import React from 'react';
import Toast from 'react-native-toast-message';

import { AppError, InternalServerError } from '../../domain';

export interface Response<T> {
  status: 'success' | 'error';
  data: T;
  error?: string;
}

export type UseCaseExecute = (...args) => Promise<any>;

export interface UseCase {
  execute: UseCaseExecute;
}

export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export type ExecuteHandler<Handler extends UseCaseExecute> = (
  ...args
) => Promise<Response<Awaited<ReturnType<Handler>>>>;

export function useExecute<UseCaseT extends UseCase>(usecase: UseCaseT) {
  const execute: ExecuteHandler<UseCaseT['execute']> = React.useCallback(
    async (...args) => {
      try {
        const data = await usecase.execute(...args);

        return { status: 'success', data };
      } catch (error) {
        const errorIsInstanceOfAppError = error instanceof AppError;

        const defaultErrorMessage =
          !errorIsInstanceOfAppError && new AppError().message;

        const errorMessage = errorIsInstanceOfAppError
          ? error.message
          : defaultErrorMessage;

        const isInternalServerError = error instanceof InternalServerError;

        const titleToastError = isInternalServerError
          ? 'Lamentamos pelo incovinente'
          : 'Verifique os dados e tente novamente';

        Toast.show({
          type: 'error',
          text1: titleToastError,
          text2: errorMessage
        });

        return { status: 'error', error: errorMessage, data: undefined };
      }
    },
    [usecase]
  );

  return execute;
}
