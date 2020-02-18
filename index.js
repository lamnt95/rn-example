/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import App from './App';
import LifeCycle from './components/LifeCycle';
import ROUTE from './constant/route';

Navigation.registerComponent(ROUTE.WELCOME, () => App);
Navigation.registerComponent(ROUTE.LIFE_CYCLE, () => LifeCycle);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: ROUTE.LIFE_CYCLE,
      },
    },
  });
});
