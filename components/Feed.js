import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import push from '../route/push';
import ROUTE from '../constant/route';
import feedData from '../data/feed.json';
import FeedItem from './FeedItem';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

function onPressBtnToFeedItem(item, componentId) {
  push(componentId, ROUTE.FEED_ITEM_DETAIL, {id: item.id, content: item.content});
}

function renderItem(item, componentId) {
  return (
    <FeedItem
      id={item.id}
      content={item.content}
      onPress={() => onPressBtnToFeedItem(item, componentId)}
    />
  );
}

export default function Feed(props) {
  const {componentId} = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={feedData}
        renderItem={({item}) => renderItem(item, componentId)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
