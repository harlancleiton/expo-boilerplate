import { AppError } from './AppError';

export class InternalServerError extends AppError {
  constructor(
    title = 'Por favor, tente novamente mais tarde',
    message = 'Nossos servidores estão passando por alguma instabilidade no momento.'
  ) {
    super(title, message);
  }
}
