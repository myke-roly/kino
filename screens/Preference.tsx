import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../components/Buttons';
import { stylesGlobal } from '../styles';

const Preference = () => {
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
  return (
    <>
      <View style={stylesGlobal.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Pick your favorite movies</Text>
          <View style={styles.list}>
            {movies.map((movie) => (
              <Text style={styles.item}>{movie.name}</Text>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Buttons title="Continue" />
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
