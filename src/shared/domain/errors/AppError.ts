export class AppError extends Error {
  constructor(
    public readonly title = 'Lamentamos pelo inconveniente',
    message = 'Ocorreu um erro desconhecido'
  ) {
    super(message);
  }
}
