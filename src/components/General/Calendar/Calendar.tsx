import React, {FC, useEffect, useState} from 'react';

import {useTheme} from '@react-navigation/native';
import {CalendarProps, Calendar as CalendarView} from 'react-native-calendars';

import {calendarMock} from '../../../../mockData/calendar';
import styles from './Calendar.styles';

type markedDates = {
  [key: string]: {
    marked: boolean;
    dotColor: string;
  };
};
export interface ICalendarProps extends CalendarProps {
  onDayPress: (date: any) => void;
}

const Calendar: FC<ICalendarProps> = ({onDayPress}) => {
  const {colors} = useTheme();
  const [markedDates, setMarkedDates] = useState<markedDates>();

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
      style={styles.calendar}
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
