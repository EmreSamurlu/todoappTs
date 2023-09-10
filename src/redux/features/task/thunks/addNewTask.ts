import {taskType} from '@redux/types/reduxTypes';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createTaskThunk = createAsyncThunk(
  'taskList/createTaskThunk',
  async ({task}: {task: taskType}) => {
    console.log('REDUX s', task);
    //TODO: create task in db
    return task;
  },
);
