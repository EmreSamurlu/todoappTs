import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {createTaskThunk} from './thunks/addNewTask';
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
    builder.addCase(createTaskThunk.pending, state => {
      state.taskLoading = true;
    });
    builder.addCase(createTaskThunk.fulfilled, (state, action) => {
      state.taskLoading = false;
      state.task = action.payload;
    });
    builder.addCase(createTaskThunk.rejected, (state, action) => {
      state.taskLoading = false;
      state.taskError = action;
    });
  },
});

export default taskListSlicer.reducer;
