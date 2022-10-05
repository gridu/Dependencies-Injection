import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

const config = (window as any).__CONFIG__;
delete (window as any).__CONFIG__;


export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  ioc.register('apiConfig', {path: config.api.path, resources: config.api.resources});
  return ioc;
};
