import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd',
    marginBottom: 10,
  },
  id: {
    marginLeft: 15,
    color: 'blue',
    width: 20,
  },
  content: {
    marginLeft: 15,
    color: '#333',
  },
});

export default function FeedItem(props) {
  const {content, id, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
}
