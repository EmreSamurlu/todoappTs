import React, {FC} from 'react';

import {Calendar as CalendarView, CalendarProps} from 'react-native-calendars';

export interface ICalendarProps extends CalendarProps {
  onDayPress: () => void;
}

const Calendar: FC<ICalendarProps> = ({onDayPress}) => {
  return <CalendarView onDayPress={onDayPress} />;
};

export default Calendar;
