import {Navigation} from 'react-native-navigation';
import App from '../App';
import LifeCycle from '../components/LifeCycle';
import ROUTE from '../constant/route';

export default function registerComponent() {
  Navigation.registerComponent(ROUTE.WELCOME, () => App);
  Navigation.registerComponent(ROUTE.LIFE_CYCLE, () => LifeCycle);
}
