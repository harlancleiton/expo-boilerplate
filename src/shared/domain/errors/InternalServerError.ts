import { AppError } from './AppError';

export class InternalServerError extends AppError {
  constructor(
    message = 'Nossos servidores estão passando por alguma instabilidade no momento.'
  ) {
    super(message);
  }
}
