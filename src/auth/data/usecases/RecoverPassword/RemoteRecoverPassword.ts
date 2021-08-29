import { HttpClient, RemoteTemplateMethod } from '../../../../shared';
import { HttpMethod } from '../../../../shared/data/protocols/http/types';
import { RecoverPassword } from '../../../domain';

export class RemoteRecoverPassword
  extends RemoteTemplateMethod<void>
  implements RecoverPassword
{
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getRequestBody(email: string) {
    return { email };
  }

  getUrl(): string {
    return 'auth/recover-password';
  }

  getMethod(): HttpMethod {
    return 'post';
  }
}
