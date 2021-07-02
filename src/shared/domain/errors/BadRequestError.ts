import { AppError } from './AppError';

export class BadRequestError extends AppError {
  constructor(message = 'Ops, parece que tem algum dado incorreto.') {
    super(message);
  }
}
