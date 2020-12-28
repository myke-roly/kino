import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { stylesGlobal } from '../styles';

export default function Loading() {
  return (
    <View style={[stylesGlobal.container, styles.main]}>
      <ActivityIndicator size="large" color="#333" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#34434588',
    zIndex: 9,
  },
});
