import { AppError } from './AppError';

export class NetworkError extends AppError {
  constructor(message = 'Falha na conexão com a internet.') {
    super(message);
  }
}
