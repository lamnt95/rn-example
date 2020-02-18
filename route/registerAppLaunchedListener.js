import {Navigation} from 'react-native-navigation';
import setRoot from '../route/setRoot';

export default function registerAppLaunchedListener() {
  Navigation.events().registerAppLaunchedListener(() => {
    setRoot();
  });
}
