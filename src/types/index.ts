export interface ILogger {
  info: (message: string) => {};
  error: (error: string) => {};
}

export interface User {
  id: number;
  name: string;
}

export interface IHttp {
  logger: ILogger;
  apiConfig: ApiConfig;
  get: (url: string) => {};
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}
