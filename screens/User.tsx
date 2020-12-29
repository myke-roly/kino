import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloReactNative = () => {
  return (
    <View style={styles.user}>
      <Text style={styles.title}>USER Mike</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
});

export default HelloReactNative;
