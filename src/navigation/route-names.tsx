export interface RouteName {
  AuthStack: string;
  MainStack: string;
  LandingPage: string;
  Login: string;
  SignUp: string;
  Home: string;
  CreateTask: string;
  TaskMain: string;
  TaskList: string;
  Settings: string;
}
export const routeNames: RouteName = {
  AuthStack: 'Auth Stack',
  MainStack: 'Main Stack',
  LandingPage: 'Landing Page',
  Login: 'Login',
  SignUp: 'Sign Up',
  Home: 'Home',
  CreateTask: 'Create Task',
  TaskMain: 'Task Main',
  TaskList: 'Task List',
  Settings: 'Settings',
};

export const navigationOptions = {
  headerShown: false,
};
