import { ioc } from './ioc';
import { Users } from './services/users';
import { User } from "./types";

const renderUsers = async (usersService: Users) => {
  const users = await usersService.getUsers();
  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');
    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = async () => {
  const logger = ioc.resolve('logger');
  const usersService = ioc.resolve('user');
  logger.info('Page is loaded.');


  await renderUsers(usersService);
};

window.onload = app;
