export class AppError extends Error {
  constructor(message = 'Ocorreu um erro desconhecido') {
    super(message);
  }
}
