import {Navigation} from 'react-native-navigation';

export default function showOverlay(name) {
  Navigation.showOverlay({
    component: {
      name,
      options: {
        overlay: {
          interceptTouchOutside: true,
        },
      },
    },
  });
}
