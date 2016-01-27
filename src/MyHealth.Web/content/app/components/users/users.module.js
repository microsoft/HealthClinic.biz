var moduleName = 'myHealth.users';

import UsersController from './controllers/usersController';
import UserDetailController from './controllers/userDetailController';
import UsersService from './services/usersService';

angular.module(moduleName, []).
    controller('usersController', UsersController).
    controller('userDetailController', UserDetailController).
    service('usersService', UsersService);

export default moduleName;