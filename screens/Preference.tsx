import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../components/Buttons';
import { stylesGlobal } from '../styles';

import httpModules from '../api';
import { Methods, TYPES as typeRequest } from '../api/utils';
import { NavigatorProps } from '../types';

interface PropsI {
  navigation: NavigatorProps;
}

const Preference: FC<PropsI> = ({ navigation }) => {
  const movies: any[] = [
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
    { name: 'mike' },
  ];

  async function getMovies(): Promise<any> {
    navigation.navigate('Layout');
    const options = {
      url: 'discover/movie',
      method: Methods.get,
      type: typeRequest.json,
      movies: true,
      params: 'page=1',
    };

    try {
      const data = await httpModules.get(options);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  return (
    <>
      <View style={stylesGlobal.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Pick your favorite movies</Text>
          <View style={styles.list}>
            {movies.map((movie, index) => (
              <View key={index} style={styles.item}>
                <Text>{movie.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Buttons title="Continue" onPress={getMovies} />
        <Button title="Continue" onPress={getMovies} />
      </View>
    </>
  );
};

export default Preference;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 10,
    width: 150,
    height: 150,
    borderColor: '#333',
    borderWidth: 2,
    padding: 10,
  },
  footer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.5,
    elevation: 10,
  },
});
