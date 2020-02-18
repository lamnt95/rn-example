import {Navigation} from 'react-native-navigation';
import Chat from '../components/Chat';
import Feed from '../components/Feed';
import FeedItemDetail from '../components/FeedItemDetail';
import Group from '../components/Group';
import ROUTE from '../constant/route';

export default function registerComponent() {
  Navigation.registerComponent(ROUTE.GROUP, () => Group);
  Navigation.registerComponent(ROUTE.CHAT, () => Chat);
  Navigation.registerComponent(ROUTE.FEED, () => Feed);
  Navigation.registerComponent(ROUTE.FEED_ITEM_DETAIL, () => FeedItemDetail);
}
