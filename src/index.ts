import { iocContainer } from './ioc';
import { User } from './types';


const renderUsers = async () => {
  const usersService = iocContainer.resolve('users');
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  renderUsers();
};

window.onload = () => {
  const logger = iocContainer.resolve('logger');

  logger.info('Page is loaded.');

  app();
};
