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
  navigation.navigate(ROUTE.DETAIL);
}

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Navigate to Detail"
        onPress={() => navigateDetail(navigation)}
      />
    </View>
  );
}
