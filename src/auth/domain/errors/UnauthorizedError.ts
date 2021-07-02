import { AppError } from '../../../shared';

export class UnauthorizedError extends AppError {
  constructor(message = 'Credenciais inválidas') {
    super(message);
  }
}
