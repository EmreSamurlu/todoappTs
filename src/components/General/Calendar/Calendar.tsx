import React, {FC, useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';

import {Calendar as CalendarView, CalendarProps} from 'react-native-calendars';
import {calendarMock} from '../../../../mockData/calendar';

type date = {
  dateString: string;
};
type markedDates = {
  [key: string]: {
    marked: boolean;
    dotColor: string;
  };
};
export interface ICalendarProps extends CalendarProps {
  onDayPress: () => void;
}

const Calendar: FC<ICalendarProps> = () => {
  const {colors} = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState<markedDates>();

  const onDayPress = (date: date) => {
    setSelectedDate(date.dateString);
  };

  useEffect(() => {
    const obj: any = {};

    for (let i = 0; i < calendarMock.length; i++) {
      const element = calendarMock[i];
      obj[element.date] = {
        periods: element.periods,
      };
    }
    setMarkedDates(obj);
  }, []);

  // console.log(JSON.stringify(markedDates, null, 2));

  return (
    <CalendarView
      firstDay={1}
      onDayPress={onDayPress}
      markedDates={markedDates}
      markingType="multi-period"
      theme={{
        selectedDayBackgroundColor: colors.blue,
        backgroundColor: colors.background,
        calendarBackground: colors.background,
        textSectionTitleColor: '#b6c1cd',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e',
      }}
    />
  );
};

export default Calendar;
