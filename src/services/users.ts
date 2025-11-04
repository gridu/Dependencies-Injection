import { HTTP } from "./http";

import type { ApiConfig, User } from "../types";
export class Users {
  static $inject = ["HTTP", "apiConfig"]; //HTTP and config Dependencies

  http: HTTP;
  apiConfig: ApiConfig;

  constructor(http: HTTP, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
