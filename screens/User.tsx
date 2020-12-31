import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUserData } from '../firebase';

const HelloReactNative = () => {
  useEffect(() => {
    getUserData();
  }, []);

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
