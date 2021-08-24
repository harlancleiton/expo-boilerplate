import { UserModel } from '../../../../auth';
import {
  AppError,
  HttpClient,
  NetworkError,
  UnauthorizedError
} from '../../../../shared';
import { HttpResponse } from '../../../../shared/data/protocols/http/types';
import { GetMe } from '../../../domain/usecases';

export class RemoteGetMe implements GetMe {
  constructor(private readonly httpClient: HttpClient) {}

  async execute(): Promise<UserModel> {
    try {
      const response = await this.httpClient.request<UserModel>({
        method: 'get',
        url: 'users/me'
      });

      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new NetworkError();
      }

      const response: HttpResponse = error.response;

      switch (response.status) {
        case 401:
          throw new UnauthorizedError();
        default:
          throw new AppError();
      }
    }
  }
}
