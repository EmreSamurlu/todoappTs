import {TaskListProps} from '../../types/reduxTypes';

export const initialState: TaskListProps = {
  tasks: [],
  tasksLoading: false,
  tasksError: null,

  task: {
    date: '',
    title: '',
    category: '',
    isCompleted: false,
  },
  taskError: null,
  taskLoading: false,
};
