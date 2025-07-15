import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

import type { ApiConfig } from '../types';

export const createIoCContainer = (config: ApiConfig) => {
  const ioc = new IoCContainer();

  ioc.register('ApiConfig', config);

  ioc.registerClass('Logger', Logger);
  ioc.registerClass('HTTP', HTTP);
  ioc.registerClass('Users', Users);

  return ioc;
};
