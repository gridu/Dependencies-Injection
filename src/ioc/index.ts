import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { ApiConfig } from '../types';
import { getConfig } from '../index';

export const createIoCContainer = () => {
  // you can register some resources right now below...

  const ioc = new IoCContainer<IoCResources>();

  ioc.register('apiConfig', getConfig() as ApiConfig);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  return ioc;
};

type IoCResources = {
  apiConfig: ApiConfig
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
}