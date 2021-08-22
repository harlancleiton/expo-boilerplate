import {
  HttpClient,
  NetworkError,
  BadRequestError,
  InternalServerError,
  AppError
} from '../../../../shared';
import { HttpResponse } from '../../../../shared/data/protocols/http/types';
import {
  Authentication,
  CredentialsModel,
  SessionModel,
  UnauthorizedError
} from '../../../domain';

export class RemoteAuthentication implements Authentication {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(credentials: CredentialsModel): Promise<SessionModel> {
    try {
      const response = await this.httpClient.request<SessionModel>({
        method: 'post',
        url: 'auth/login',
        data: credentials
      });

      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new NetworkError();
      }

      const response: HttpResponse = error.response;

      switch (response.status) {
        case 400:
          throw new BadRequestError();
        case 401:
          throw new UnauthorizedError('Usuario ou senha incorretos');
        case 500:
        case 503:
          throw new InternalServerError();
        default:
          throw new AppError();
      }
    }
  }
}
