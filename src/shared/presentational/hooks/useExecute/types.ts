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
