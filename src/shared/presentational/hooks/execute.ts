import React from 'react';

import { AppError } from '../../domain';

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
        if (error instanceof AppError)
          return { status: 'error', error: error.message, data: undefined };

        const appError = new AppError();
        return { status: 'error', error: appError.message, data: undefined };
      }
    },
    [usecase]
  );

  return execute;
}
