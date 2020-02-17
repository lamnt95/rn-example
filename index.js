/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import App from './App';
import {name as appName} from './app.json';

function NavigationContainerWrapper() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => NavigationContainerWrapper);
