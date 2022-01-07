/**
 * @format
 */

import {AppRegistry} from 'react-native';
import OnBoarding from './src/screen/OnBoarding';
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import {name as appName} from './app.json';

var firstLoad = 0;

if (firstLoad === 0) {
  AppRegistry.registerComponent(appName, () => Login);
} else if (firstLoad === 1) {
  AppRegistry.registerComponent(appName, () => OnBoarding);
} else {
  AppRegistry.registerComponent(appName, () => Home);
}
