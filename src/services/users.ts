import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  static $inject = ['apiConfig', 'http'];

  constructor(
    private readonly apiConfig: ApiConfig,
    private readonly http: HTTP
  ) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
