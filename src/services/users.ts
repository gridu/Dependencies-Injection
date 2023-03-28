import type { ApiConfig, IHttp, User } from '../types';

export class Users {
  http: IHttp;
  apiConfig: ApiConfig;

  static $inject = ['http', 'apiConfig']

  constructor(http: IHttp, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
