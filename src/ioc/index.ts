import IoCContainer from 'ioc-lite';
import { Users } from '../services/users';
import { HTTP } from '../services/http';
import { Logger } from '../services/logger';

export const createIoCContainer = () => {
    const ioc = new IoCContainer();
    ioc.registerClass('user', Users);
    ioc.registerClass('http', HTTP);
    ioc.registerClass('logger', Logger);
    return ioc;
};