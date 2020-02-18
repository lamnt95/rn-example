import {Navigation} from 'react-native-navigation';
import setRoot from './setRoot';

export default function registerAppLaunchedListener() {
  Navigation.events().registerAppLaunchedListener(() => {
    setRoot();
  });
}
