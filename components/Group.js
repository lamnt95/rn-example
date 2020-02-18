import React from 'react';
import {View, Text} from 'react-native';

export default function Group(props) {
  console.log('App Screen', props);
  return (
    <View>
      <Text>Group</Text>
      <Text>{props.text}</Text>
    </View>
  );
}
