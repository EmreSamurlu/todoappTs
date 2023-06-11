import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {Theme} from './features/theme/initialState';

import {themeReducer} from './features';

export type RootState = {
  theme: Theme;
};
const rootReducer = combineReducers<RootState>({
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
