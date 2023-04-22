import type { ApiConfig, User, IHttp } from '../types';
export class Users {
  apiConfig: ApiConfig;
  http: IHttp;

  static $inject = ['apiConfig', 'http'];

  constructor(apiConfig: ApiConfig, http: IHttp) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
