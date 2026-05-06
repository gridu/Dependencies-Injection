import IoCContainer from 'ioc-lite';
import type { ApiConfig } from 'src/types';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

type IoCResources = {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  config: ApiConfig
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();

  ioc.registerClass('logger', Logger)
  ioc.registerClass('http', HTTP)
  ioc.registerClass('users', Users)

  return ioc;
};
