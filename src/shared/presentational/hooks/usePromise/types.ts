import { AppError } from '../../../domain';

export enum PromiseStatus {
  INIT = 'init',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending'
}

export interface PromiseToastOptions {
  [PromiseStatus.ERROR]: boolean;
}

export interface PromiseOptions {
  toast: boolean | PromiseToastOptions;
}

export interface State<T> {
  status: PromiseStatus;
  data?: T;
  error?: AppError;
}

export type Action<T> =
  | { type: PromiseStatus.INIT }
  | { type: PromiseStatus.PENDING }
  | { type: PromiseStatus.SUCCESS; payload: T }
  | { type: PromiseStatus.ERROR; payload: AppError };
