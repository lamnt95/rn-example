/**
 * @format
 */
import ROUTE from './constant/route';
import registerComponent from './route/registerComponent';
import showOverlay from './route/showOverlay';
import registerAppLaunchedListener from './route/registerAppLaunchedListener';

registerComponent();
registerAppLaunchedListener();
showOverlay(ROUTE.LIFE_CYCLE);
