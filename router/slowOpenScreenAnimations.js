import {PixelRatio, Dimensions} from 'react-native';

const height =
  PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height) * 0.7;
const SHOW_DURATION = 230 * 8;

const slowOpenScreenAnimations = {
  showModal: {
    waitForRender: true,
    y: {
      from: height,
      to: 0,
      duration: SHOW_DURATION,
      interpolation: 'accelerateDecelerate',
    },
    alpha: {
      from: 0.7,
      to: 1,
      duration: SHOW_DURATION,
      interpolation: 'accelerate',
    },
  },
  push: {
    waitForRender: true,
    content: {
      alpha: {
        from: 0.6,
        to: 1,
        duration: SHOW_DURATION,
      },
      y: {
        from: height,
        to: 0,
        duration: SHOW_DURATION,
      },
    },
  },
};

export default slowOpenScreenAnimations;
