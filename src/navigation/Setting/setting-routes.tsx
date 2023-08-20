import {Settings} from '../../screens';
import Profile from '../../screens/Main/Settings/Profile/Profile';
import AppInfo from '../../screens/Main/Settings/AppInfo/AppInfo';
import UserPrefs from '../../screens/Main/Settings/UserPrefs/UserPrefs';
import {routeNames} from '../route-names';
import {Props} from './types';
export const settingRoutes: Props[] = [
  {
    name: routeNames.Settings,
    component: Settings,
    options: {
      headerShown: false,
    },
  },
  {
    name: routeNames.Profile,
    component: Profile,
    options: {
      headerShown: false,
    },
  },
  {
    name: routeNames.UserPrefs,
    component: UserPrefs,
    options: {
      headerShown: false,
    },
  },
  {
    name: routeNames.AppInfo,
    component: AppInfo,
    options: {
      headerShown: false,
    },
  },
];
