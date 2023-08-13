import {LandingPage, Login, SignUp} from '../../screens';
import {routeNames} from '../route-names';

export default [
  {
    routeName: routeNames.LandingPage,
    component: LandingPage,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: routeNames.Login,
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: routeNames.SignUp,
    component: SignUp,
    options: {
      headerShown: false,
    },
  },
];

export const authOptions = {
  headerShown: false,
};
