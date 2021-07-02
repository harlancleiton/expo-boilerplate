import {
  AppError,
  BadRequestError,
  HttpClient,
  NetworkError
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
      const response = await this.httpClient.request({
        method: 'post',
        url: '/auth/login',
        data: credentials
      });

      return await response.data;
    } catch (error) {
      if (!error.response) {
        throw new NetworkError();
      }

      const response: HttpResponse = error.response;

      switch (response.status) {
        case 400:
          throw new BadRequestError();
        case 401:
          throw new UnauthorizedError();
        default:
          throw new AppError();
      }
    }
  }
}
