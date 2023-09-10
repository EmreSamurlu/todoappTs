export interface TasksProps {
  id: number;
  date: string;
  title: string;
  category: string;
  startingDay?: boolean;
  endingDay?: boolean;
  color?: string;
  periods?: object[];
  isCompleted: boolean;
}

export const calendarMock: TasksProps[] = [
  {
    id: 1,
    date: '2023-09-10',
    title: 'Save Money',
    category: 'Finance',
    isCompleted: true,
  },
  {
    id: 2,
    date: '2023-09-10',
    title: 'Go to Bank',
    category: 'Freelance',
    isCompleted: false,
  },
  {
    id: 3,
    date: '2023-09-10',
    title: 'Buy Groceries',
    category: 'Shopping',
    isCompleted: true,
  },
  {
    id: 4,
    date: '2023-09-10',
    title: 'Play Guitar',
    category: 'Hobby',
    isCompleted: false,
  },
  {
    id: 5,
    date: '2023-09-10',
    title: 'Second Task',
    category: 'Freelance',
    isCompleted: false,
  },
  {
    id: 6,
    date: '2023-09-10',
    title: 'Second Task',
    category: 'Shopping',
    isCompleted: false,
  },
  {
    id: 7,
    date: '2023-09-10',
    title: 'Second Task',
    category: 'Finance',
    isCompleted: false,
  },
  {
    id: 8,
    date: '2023-09-10',
    title: 'Second Task',
    category: 'Freelance',
    isCompleted: false,
  },
  {
    id: 9,
    date: '2023-07-15',
    title: 'Second Task',
    category: 'Shopping',
    isCompleted: false,
  },
  {
    id: 10,
    date: '2023-07-13',
    title: 'Second Task',
    category: 'Finance',
    isCompleted: false,
  },
  {
    id: 11,
    date: '2023-07-14',
    title: 'Second Task',
    category: 'Freelance',
    isCompleted: false,
  },
  {
    id: 12,
    date: '2023-07-15',
    title: 'Second Task',
    category: 'Shopping',
    isCompleted: false,
  },
];
