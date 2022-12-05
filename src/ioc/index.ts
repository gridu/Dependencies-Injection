import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

const getApiConfig = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  return config?.api;
}

export const createIoCContainer = () => {
  const ioc = new IoCContainer();

  ioc.registerClass('logger', Logger);
  ioc.register('apiConfig', getApiConfig());
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  return ioc;
};
