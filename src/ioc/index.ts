import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import type { ApiConfig } from '../types';

export const createIoCContainer = (config: ApiConfig) =>  {
  const ioc = new IoCContainer();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  ioc.register('config', config);
  // you can register some resources right now below...

  return ioc;
};
