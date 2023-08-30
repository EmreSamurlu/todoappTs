import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {initialState} from './initialState';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setToday: (state, action: PayloadAction<string>) => {
      state.today = action.payload;
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const {setToday, setSelectedDate} = calendarSlice.actions;

export default calendarSlice.reducer;
