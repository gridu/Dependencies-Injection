export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface IHTTP {
  get: (url: string) => Promise<User[]>
}