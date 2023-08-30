export interface ThemeProps {
  theme: string;
  themeError: object | null;
  themeLoading: boolean;
}

export interface AuthProps {
  token: string;
  tokenError: object | null;
  tokenLoading: boolean;

  createUser: string;
  createUserError: object | null;
  createUserLoading: boolean;

  logout: string;
  logoutError: object | null;
  logoutLoading: boolean;
}

export interface CalendarProps {
  today: string;
  selectedDate: string;
  todayError: object | null;
  todayLoading: boolean;
}

export interface TaskListProps {
  tasks: [
    {
      id: number;
      date: string;
      title: string;
      category: string;
      startingDay?: boolean;
      endingDay?: boolean;
      color?: string;
      periods?: object[];
      isCompleted: boolean;
    },
  ];
  tasksError: object | null;
  tasksLoading: boolean;
}
