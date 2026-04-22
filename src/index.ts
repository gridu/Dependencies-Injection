import { Users } from './services/users';
import { Logger } from './services/logger';
import { createIoCContainer } from './ioc';

import type { User } from './types';
import type IoCContainer from 'ioc-lite';

const renderUsers = async (usersService: Users) => {
  const users = await usersService.getUsers();
  const listNode = document.getElementById('users-list')!;

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};


const app = (ioc: IoCContainer<any>) => {
  const usersService = ioc.resolve('users') as Users;

  renderUsers(usersService);
};

window.onload = () => {
  const config = (window as any).__CONFIG__;
   delete (window as any).__CONFIG__;

  const ioc = createIoCContainer(config.api);
  const logger = ioc.resolve('logger') as Logger;
  
  logger.info('Page is loaded.');

  app(ioc);
};