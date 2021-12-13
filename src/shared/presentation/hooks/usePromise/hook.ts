import React from 'react';

import { AppError } from '../../../domain';
import { useToast } from '../useToast';
import { State, Action, PromiseStatus, PromiseOptions } from './types';

const defaultPromiseOptions: PromiseOptions = { toast: true };

const initialPromiseState: State<any> = {
  status: PromiseStatus.INIT,
  data: null,
  error: null
};

const promiseReducer = <T>(
  prevState: State<T>,
  action: Action<T>
): State<T> => {
  switch (action.type) {
    case PromiseStatus.INIT:
      return initialPromiseState;
    case PromiseStatus.PENDING:
      return {
        data: null,
        error: null,
        status: PromiseStatus.PENDING
      };
    case PromiseStatus.SUCCESS:
      return {
        data: action.payload,
        error: null,
        status: PromiseStatus.SUCCESS
      };
    case PromiseStatus.ERROR:
      return {
        data: null,
        error: action.payload,
        status: PromiseStatus.ERROR
      };
    default:
      return prevState;
  }
};

export function usePromise<T = any>(
  promise: Promise<T>,
  options = defaultPromiseOptions
): State<T> {
  const [state, dispatch] = React.useReducer(
    promiseReducer as (prevState: State<T>, action: Action<T>) => State<T>,
    initialPromiseState
  );

  const promiseRef = React.useRef(promise);

  React.useEffect(() => {
    dispatch({ type: PromiseStatus.PENDING });

    promiseRef.current.then(data => {
      dispatch({ type: PromiseStatus.SUCCESS, payload: data });
    });
    promiseRef.current.catch(_error => {
      const error = _error instanceof AppError ? _error : new AppError();

      dispatch({ type: PromiseStatus.ERROR, payload: error });
    });
  }, []);

  const toast = useToast();

  React.useEffect(() => {
    if (!state.error) return;
    if (!options.toast || !options.toast[PromiseStatus.ERROR]) return;

    toast({
      type: 'error',
      title: state.error.title,
      message: state.error.message
    });
  }, [options.toast, state.error, toast]);

  return state;
}
