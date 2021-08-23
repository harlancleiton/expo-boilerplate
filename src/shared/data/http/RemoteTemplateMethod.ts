import { UnauthorizedError } from '../../../auth';
import {
  AppError,
  BadRequestError,
  InternalServerError,
  NetworkError
} from '../../domain';
import { HttpClient } from '../protocols';
import { HttpMethod, HttpResponse } from '../protocols/http/types';

export abstract class RemoteTemplateMethod<ResponseT> {
  constructor(protected readonly httpClient: HttpClient) {}

  async execute(...args): Promise<ResponseT> {
    try {
      const response = await this.httpClient.request<ResponseT>({
        method: this.getMethod(),
        url: this.getUrl(),
        data: this.getRequestBody(...args),
        headers: this.getRequestHeaders()
      });

      return response.data;
    } catch (error) {
      const customException = this.exceptionFactory(error);
      const exception = customException || this.extractException(error);

      throw exception;
    }
  }

  abstract getUrl(): string;
  abstract getMethod(): HttpMethod;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected exceptionFactory(error: any): AppError {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getRequestBody(...args): any {
    return undefined;
  }

  protected getRequestHeaders(): Record<string, string> {
    return undefined;
  }

  protected extractException(error: any): AppError {
    if (!error.response) {
      return new NetworkError();
    }

    const response: HttpResponse = error.response;

    switch (response.status) {
      case 400:
        return new BadRequestError();
      case 401:
        return new UnauthorizedError();
      case 404:
        return new AppError('Não encontramos o que você está procurando');
      case 500:
      case 503:
        return new InternalServerError();
      default:
        return new AppError();
    }
  }
}
