import React, { FC, Props } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signOut } from '../../firebase';
import useGetUserData from '../../hooks/useAuthFirebase';
import { NavigatorProps } from '../../types';

interface PropsI {
  navigation: NavigatorProps;
}

const User: FC<PropsI> = ({ navigation }) => {
  const { userData } = useGetUserData();

  const logout = () => {
    console.log('logout....');
    signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Signin' }],
    });
  };

  return (
    <View style={styles.container}>
      <Button title="sign out" onPress={logout} />
      <Button title="edit profile" onPress={() => navigation.navigate('EditUser')} />
      <Text style={styles.title}>{userData?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
});

export default User;
