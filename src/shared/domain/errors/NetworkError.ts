import { AppError } from './AppError';

export class NetworkError extends AppError {
  constructor(
    title = 'Você está conectado?',
    message = 'Falha na conexão com a internet.'
  ) {
    super(title, message);
  }
}
