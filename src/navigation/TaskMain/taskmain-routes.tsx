import {TaskList, CreateTask} from '../../screens';
import {routeNames} from '../route-names';
import {Props} from './types';
export const taskMainRoutes: Props[] = [
  {
    name: routeNames.TaskList,
    component: TaskList,
    options: {
      headerShown: false,
    },
  },
  {
    name: routeNames.CreateTask,
    component: CreateTask,
    options: {
      headerShown: false,
    },
  },
];
