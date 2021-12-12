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

export type ClearHandler = () => void;
export type ExecuteHandler<T = any> = (promise: Promise<T>) => void;

export interface State<T> {
  status: PromiseStatus;
  data?: T;
  error?: string;
}

export type Action<T> =
  | { type: PromiseStatus.INIT }
  | { type: PromiseStatus.PENDING }
  | { type: PromiseStatus.SUCCESS; payload: T }
  | { type: PromiseStatus.ERROR; payload: string };
