export class AppError extends Error {
  constructor(
    public readonly title = 'Isso não deveria ter acontecido',
    message = 'Ocorreu um erro não previsto, mas já acionei nossos ninjas para resolvê-lo.'
  ) {
    super(message);
  }
}
