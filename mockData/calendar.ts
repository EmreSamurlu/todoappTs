interface CalendarItems {
  id: number;
  date: string;
  title: string;
  description: string;
  startingDay?: boolean;
  endingDay?: boolean;
  color?: string;
  periods?: object[];
}

export const calendarMock: CalendarItems[] = [
  {
    id: 5,
    date: '2023-07-13',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    periods: [{startingDay: true, endingDay: true, color: 'lightgreen'}],
  },
  {
    id: 6,
    date: '2023-07-14',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    periods: [{startingDay: false, endingDay: true, color: 'lightgreen'}],
  },
  {
    id: 7,
    date: '2023-07-15',
    title: 'Second Task',
    description: 'This is the Second mock task description',
    periods: [
      {startingDay: true, endingDay: true, color: 'orange'},
      {color: 'transparent'},
      {startingDay: false, endingDay: false, color: 'pink'},
    ],
  },
];
