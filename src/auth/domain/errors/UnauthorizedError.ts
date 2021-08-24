import { AppError } from '../../../shared/domain';

export class UnauthorizedError extends AppError {
  constructor(message = 'Credenciais inválidas') {
    super(message);
  }
}
