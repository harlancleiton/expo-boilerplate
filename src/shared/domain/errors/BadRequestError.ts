import { AppError } from './AppError';

export class BadRequestError extends AppError {
  constructor(
    title = 'Algo de errado não está certo',
    message = 'Verifique os dados e tente novamente'
  ) {
    super(message, title);
  }
}
