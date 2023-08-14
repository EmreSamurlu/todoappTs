import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {themeReducer, authReducer} from './features';
import {ThemeProps, AuthProps} from './types/reduxTypes';

export type RootState = {
  theme: ThemeProps;
  auth: AuthProps;
};
const rootReducer = combineReducers<RootState>({
  theme: themeReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
