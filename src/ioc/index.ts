import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

// using a generic type allows you to control which resources can be registered.
export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  // you can register some resources right now below...
  ioc.registerClass('http', HTTP);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('users', Users);
  
  return ioc;
};
