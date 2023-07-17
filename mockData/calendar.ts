interface CalendarItems {
  id: number;
  date: string;
  title: string;
  description: string;
  // startingDay?: boolean;
  // endingDay?: boolean;
  marked: boolean;
}

export const calendarMock: CalendarItems[] = [
  {
    id: 1,
    date: '2023-07-19',
    title: 'First Task',
    description: 'This is the first mock task description',
    marked: true,
  },
  {
    id: 2,
    date: '2023-07-20',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    marked: true,
  },
  {
    id: 3,
    date: '2023-07-11',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    // startingDay: true,
    // endingDay: false,
    marked: false,
  },
  {
    id: 4,
    date: '2023-07-12',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    // startingDay: false,
    // endingDay: false,
    marked: false,
  },
  {
    id: 5,
    date: '2023-07-13',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    // startingDay: false,
    // endingDay: true,
    marked: false,
  },
];
