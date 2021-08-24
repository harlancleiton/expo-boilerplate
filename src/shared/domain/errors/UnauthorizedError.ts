import { AppError } from './AppError';

export class UnauthorizedError extends AppError {
  constructor(
    title = 'Credenciais inválidas',
    message = 'Por favor, faça login novamente.'
  ) {
    super(title, message);
  }
}
