import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#ffd',
    marginBottom: 10,
  },
  id: {
    marginLeft: 15,
    color: 'blue',
  },
  content: {
    marginLeft: 15,
    color: '#333',
  },
});

export default function FeedItemDetail(props) {
  const {content, id} = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.row, styles.id]}>{id}</Text>
      <Text style={[styles.row, styles.content]}>{content}</Text>
    </View>
  );
}
