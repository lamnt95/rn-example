import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('componentDidAppear');
  }

  componentDidDisappear() {
    console.log('componentDidDisappear');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Life Cycle</Text>
      </View>
    );
  }
}
