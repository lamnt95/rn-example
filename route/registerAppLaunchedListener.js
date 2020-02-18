import {Navigation} from 'react-native-navigation';
import ROUTE from '../constant/route';

export default function registerAppLaunchedListener() {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: ROUTE.WELCOME,
        },
      },
    });
  });
}
