import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {getTaskListThunk} from './thunks/getTaskList';

export const taskListSlicer = createSlice({
  name: 'taskList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTaskListThunk.pending, state => {
      state.tasksLoading = true;
    });
    builder.addCase(getTaskListThunk.fulfilled, (state, action) => {
      state.tasksLoading = false;
      state.tasks = action.payload;
    });
    builder.addCase(getTaskListThunk.rejected, (state, action) => {
      state.tasksLoading = false;
      state.tasksError = action;
    });
  },
});

export default taskListSlicer.reducer;
