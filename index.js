/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
// import App from './.storybook';
import {name as appName} from './app.json';
import i18n from './src/hooks/i18n';
AppRegistry.registerComponent(appName, () => App);
