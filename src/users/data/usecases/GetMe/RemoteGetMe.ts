import { UserModel } from '../../../../auth';
import { HttpClient, RemoteTemplateMethod } from '../../../../shared/data';
import { HttpMethod } from '../../../../shared/data/protocols/http/types';
import { GetMe } from '../../../domain/usecases';

export class RemoteGetMe
  extends RemoteTemplateMethod<UserModel>
  implements GetMe
{
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUrl(): string {
    return 'users/me';
  }

  getMethod(): HttpMethod {
    return 'get';
  }
}
