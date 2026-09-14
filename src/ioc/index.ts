import IoCContainer from 'ioc-lite';
import { Users } from '../services/users';
import { HTTP } from '../services/http';
import { ApiConfig, ILogger } from '../types';
import { Logger } from '../services/logger';

export interface IoCResources {
  logger: ILogger;
  apiConfig: ApiConfig;
  users: typeof Users;
  http: typeof HTTP;
}

export const ioc = new IoCContainer<IoCResources>();

const config = (window as any).__CONFIG__;

ioc.register('logger', new Logger());
ioc.register('apiConfig', config.api);
ioc.registerClass('http', HTTP);
ioc.registerClass('users', Users);