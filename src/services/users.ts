import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;

  // constructor(apiConfig: ApiConfig) {
  //   this.http = new HTTP(apiConfig);
  //   this.apiConfig = apiConfig;
  // }

   static $inject = ['apiConfig', 'http'];

  constructor(apiConfig: ApiConfig, http: HTTP) {
    this.apiConfig = apiConfig;
    this.http = http;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
