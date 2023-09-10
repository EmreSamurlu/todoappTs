import {useDispatch} from 'react-redux';

import {combineReducers, configureStore} from '@reduxjs/toolkit';

import authReducer from './features/auth/slicer';
import calendarReducer from './features/calendar/slicer';
import taskListReducer from './features/task/slicer';
import themeReducer from './features/theme/slicer';
import {
  AuthProps,
  CalendarProps,
  TaskListProps,
  ThemeProps,
} from './types/reduxTypes';

export type RootState = {
  theme: ThemeProps;
  auth: AuthProps;
  calendar: CalendarProps;
  tasks: TaskListProps;
};
const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  calendar: calendarReducer,
  theme: themeReducer,
  tasks: taskListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
