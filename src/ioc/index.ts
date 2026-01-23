import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { ApiConfig } from 'src/types';
import { Users } from '../services/users';

export interface IoCContent {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: ApiConfig;
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCContent>();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  return ioc;
};
