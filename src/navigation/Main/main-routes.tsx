import React from 'react';
import {FontIcon, Text} from '../../components';
import {routeNames} from '../route-names';
import {Props} from './types';
import styles from './Main.styles';
import TaskMain from '../TaskMain/TaskMain';
import Setting from '../Setting/Setting';

export const mainRoutes: Props[] = [
  {
    name: routeNames.TaskMain,
    component: TaskMain,
    options: {
      tabBarLabel: ({focused, color}) => (
        <>
          {focused && (
            <Text
              text={routeNames.TaskList}
              textStyle={[styles.tab_label, {color: color}]}
            />
          )}
        </>
      ),
      tabBarIcon: ({color}) => (
        <FontIcon iconColor={color} iconName={'list-check'} iconSize={24} />
      ),
    },
  },
  {
    name: routeNames.Setting,
    component: Setting,
    options: {
      tabBarLabel: ({focused, color}) => (
        <>
          {focused && (
            <Text
              text={routeNames.Settings}
              textStyle={[styles.tab_label, {color: color}]}
            />
          )}
        </>
      ),
      tabBarIcon: ({color}) => (
        <FontIcon iconColor={color} iconName={'gear'} iconSize={24} />
      ),
    },
  },
];
