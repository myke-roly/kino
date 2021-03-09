import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeleteUser = () => {
  return (
    <View style={styles.screen}>
      <Text>Delete user screen</Text>
    </View>
  );
};

export default DeleteUser;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
