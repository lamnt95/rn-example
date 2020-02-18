import {Navigation} from 'react-native-navigation';
import ROUTE from '../constant/route';
import Layouts from '../screens/Layouts';
import Options from '../screens/Options';
import NavigationScreen from '../screens/Navigation';

export default function registerComponent() {
  Navigation.registerComponent(ROUTE.LAYOUTS, () => Layouts);
  Navigation.registerComponent(ROUTE.OPTIONS, () => Options);
  Navigation.registerComponent(ROUTE.NAVIGATION, () => NavigationScreen);
}
