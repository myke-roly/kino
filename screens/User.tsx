import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useGetUserData from '../hooks/useAuthFirebase';

const HelloReactNative = () => {
  const { userData } = useGetUserData();

  return (
    <View style={styles.user}>
      <Text style={styles.title}>{userData?.email}</Text>
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
    color: 'black',
  },
});

export default HelloReactNative;
