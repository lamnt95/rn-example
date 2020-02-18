import {Navigation} from 'react-native-navigation';
import ROUTE from '../constant/route';
import testIDs from '../constant/testIDs';

const layoutsImg = require('../img/layouts.png');
const layoutsSelectecdImg = require('../img/layouts_selected.png');
const optionsImg = require('../img/options.png');
const optionsSelectedImg = require('../img/options_selected.png');

const tabLayouts = {
  stack: {
    children: [
      {
        component: {
          name: ROUTE.LAYOUTS,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Layouts',
        icon: layoutsImg,
        selectedIcon: layoutsSelectecdImg,
        testID: testIDs.LAYOUTS_TAB,
      },
    },
  },
};

const tabOptions = {
  stack: {
    children: [
      {
        component: {
          name: ROUTE.OPTIONS,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Options',
        icon: optionsImg,
        selectedIcon: optionsSelectedImg,
        testID: testIDs.OPTIONS_TAB,
      },
    },
  },
};

const tabNavigation = {
  stack: {
    children: [
      {
        component: {
          name: ROUTE.NAVIGATION,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Navigation',
        icon: optionsImg,
        selectedIcon: optionsSelectedImg,
        testID: testIDs.OPTIONS_TAB,
      },
    },
  },
};

export default function setRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [tabLayouts, tabOptions, tabNavigation],
      },
    },
  });
}
