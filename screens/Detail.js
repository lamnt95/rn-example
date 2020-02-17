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

function navigateHome(navigation) {
  navigation.navigate(ROUTE.HOME, {itemName: 'From Detail to Home'});
}

function pushDetail(navigation) {
  navigation.push(ROUTE.DETAIL, {itemName: Math.round(Math.random() * 100)});
}

function goBack(navigation) {
  navigation.goBack();
}

function popToTop(navigation) {
  navigation.popToTop();
}

export default function Detail({navigation, route}) {
  const {itemName} = route.params || {};
  return (
    <View style={styles.container}>
      <Text>Detail {itemName}</Text>
      <Button
        title=" Navigate to HomeHome"
        onPress={() => navigateHome(navigation)}
      />
      <Button title="Push to Detail " onPress={() => pushDetail(navigation)} />
      <Button title="Back" onPress={() => goBack(navigation)} />
      <Button title="Pop To Top" onPress={() => popToTop(navigation)} />
    </View>
  );
}
