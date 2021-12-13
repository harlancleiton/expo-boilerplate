export interface UseCase {
  execute(...args): Promise<any>;
}

export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export interface ExecuteResponse<T> {
  status: 'success' | 'error';
  data: T;
  error?: string;
}

export type ExecuteHandler<Handler extends UseCase['execute']> = (
  ...args
) => Promise<ExecuteResponse<Awaited<ReturnType<Handler>>>>;
