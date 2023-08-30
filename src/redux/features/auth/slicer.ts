import {createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';
import {loginThunk, logoutThunk, signupThunk} from './thunks';

export const authSlicer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    clearCreateUserState: state => {
      state.createUser = '';
    },
    clearToken: state => {
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.tokenLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.token = typeof action.payload === 'string' ? action.payload : '';
      state.tokenLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.tokenError = action;
      state.tokenLoading = false;
    });
    builder.addCase(signupThunk.pending, state => {
      state.createUserLoading = true;
    });
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      state.createUser =
        typeof action.payload === 'string' ? action.payload : '';
      state.createUserLoading = false;
    });
    builder.addCase(signupThunk.rejected, (state, action) => {
      state.createUserError = action;
      state.createUserLoading = false;
    });
    builder.addCase(logoutThunk.pending, state => {
      state.logoutLoading = true;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.logout = action.payload;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.logoutError = action;
      state.logoutLoading = false;
    });
  },
});

export const {clearCreateUserState, clearToken} = authSlicer.actions;
export default authSlicer.reducer;
