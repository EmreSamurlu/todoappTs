import {createAsyncThunk} from '@reduxjs/toolkit';

import {calendarMock} from '../../../../../mockData/calendar';

export const getTaskListThunk = createAsyncThunk(
  'taskList/getTaskListThunk',
  async () => {
    return calendarMock;
  },
);
