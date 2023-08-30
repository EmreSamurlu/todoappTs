import {TaskListProps} from '../../types/reduxTypes';

export const initialState: TaskListProps = {
  tasks: [],
  tasksLoading: false,
  tasksError: null,
};
