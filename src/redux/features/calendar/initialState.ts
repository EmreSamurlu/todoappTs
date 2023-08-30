import {CalendarProps} from '../../types/reduxTypes';

export const initialState: CalendarProps = {
  today: '',
  selectedDate: '',
  todayError: null,
  todayLoading: false,
};
