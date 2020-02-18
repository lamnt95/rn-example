import {Navigation} from 'react-native-navigation';

export default function push(id, name, passProps = {}) {
  Navigation.push(id, {component: {name, passProps}});
}
