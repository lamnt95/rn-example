import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ROUTE from '../constant/route';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function navigateDetail(navigation) {
  navigation.navigate(ROUTE.DETAIL, {itemName: 'Detail Product'});
}

function setParams(navigation) {
  navigation.setParams({
    itemName: Date.now(),
  });
}

export default function Home({navigation, route}) {
  const {itemName} = route.params || {};
  return (
    <View style={styles.container}>
      <Text>Home {itemName}</Text>
      <Button
        title="Navigate to Detail"
        onPress={() => navigateDetail(navigation)}
      />
      <Button title="Set Param" onPress={() => setParams(navigation)} />
    </View>
  );
}
