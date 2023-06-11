import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import storageConstants from '../../../constants/storage-constants';
import {initialState} from './initialState';

export default createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      AsyncStorage.setItem(storageConstants.theme, action.payload);
    },
  },
});
