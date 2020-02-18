import {Navigation} from 'react-native-navigation';
import COLOR from './color';
import flag from './flag';
import slowOpenScreenAnimations from './slowOpenScreenAnimations';

export default function setDefaultOptions() {
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: COLOR.BACKGROUND,
      orientation: ['portrait'],
      direction: 'locale',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      selectedIconColor: COLOR.PRIMARY,
      selectedTextColor: COLOR.PRIMARY,
    },
    animations: {
      ...(flag.useSlowOpenScreenAnimations ? slowOpenScreenAnimations : {}),
    },
    modalPresentationStyle: 'fullScreen',
  });
}
