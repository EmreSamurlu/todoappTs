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
  const [markedDates, setMarkedDates] = useState<markedDates>({});

  const onDayPress = (date: date) => {
    setSelectedDate(date.dateString);
  };

  useEffect(() => {
    const obj: any = {};
    const periodObj: any = {};

    for (let i = 0; i < calendarMock.length; i++) {
      const element = calendarMock[i];
      //*start ve end date verilerek period oluşturulabiliyor
      // if (element.startingDay === true || element.endingDay === true) {
      //   periodObj[element.date] = {
      //     color: 'green',
      //     startingDay: element.startingDay,
      //     endingDay: element.endingDay,
      //   };
      // }
      obj[element.date] = {
        marked: element.marked,
        dotColor: colors.red,
      };
    }

    console.log('OBJ', obj);
    console.log('PERID', periodObj);

    // calendarMock.forEach(item => {
    //   console.log(Object.keys(item));
    //   obj[item.date] = {
    //     marked: item.marked,
    //     dotColor: colors.red,
    //     color: 'green',
    //     startingDay: item.startingDay && item.startingDay,
    //     endingDay: item.endingDay && item.endingDay,
    //   };
    // });
    setMarkedDates(obj);

    if (selectedDate) {
      const newObj: any = {};
      newObj[selectedDate] = {
        selected: true,
        selectedColor: colors.blue,
      };
      setMarkedDates(Object.assign(newObj, obj));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  console.log(markedDates);

  return (
    <CalendarView
      firstDay={1}
      onDayPress={onDayPress}
      markedDates={markedDates}
      markingType="period"
      theme={{
        selectedDayBackgroundColor: colors.blue,
      }}
    />
  );
};

export default Calendar;
