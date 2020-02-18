import {Navigation} from 'react-native-navigation';
import ROUTE from '../constant/route';

const tabAbout = {
  stack: {
    children: [
      {
        component: {
          name: ROUTE.FEED,
          passProps: {
            text: 'FEED',
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'TAB FEED',
        icon: 'https://via.placeholder.com/100x100.png?text=tab1',
        testID: 'FEED_ID',
      },
    },
  },
};

const tabWelcome = {
  component: {
    name: ROUTE.CHAT,
    passProps: {
      text: 'CHAT',
    },
    options: {
      bottomTab: {
        text: 'TAB CHAT',
        icon: 'https://via.placeholder.com/100x100.png?text=tab2',
        testID: 'CHAT_ID',
      },
    },
  },
};

export default function setRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [tabAbout, tabWelcome],
      },
    },
  });
}
