export interface User {
  id: number;
  name: string;
}

export interface IApiConfig {
  path: string;
  resources: { [key: string]: string };
}
