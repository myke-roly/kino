import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditUser = () => {
  return (
    <View style={styles.screen}>
      <Text>Edit user screen</Text>
    </View>
  );
};

export default EditUser;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
