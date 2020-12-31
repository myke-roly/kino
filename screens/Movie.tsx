import { RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { stylesGlobal } from '../styles';
import { NavigatorProps } from '../types';

interface PropsI {
  route: RouteProp<{ params: { movieId: string } }, 'params'>;
  navigation: NavigatorProps;
}

const Movie: FC<PropsI> = ({ route, navigation }) => {
  const { movieId } = route.params;
  console.log(movieId);
  return (
    <View style={stylesGlobal.container}>
      <Text>Movie</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({});
