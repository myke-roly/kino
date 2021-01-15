import React, { FC, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../components/Buttons';

import { NavigatorProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector } from '../state/movies/movies.selector';
import Loading from '../components/Loader';
import { getMovies } from '../state/movies/movies.actions';
interface PropsI {
  navigation: NavigatorProps;
}

const Preference: FC<PropsI> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => moviesSelector(state));

  function next() {
    navigation.navigate('Layout');
  }

  useEffect(() => {
    dispatch(getMovies({ page: 1 }));
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Pick your favorite movies</Text>
          <View style={styles.list}>
            {data?.results.map((movie: any, index: number) => (
              <View key={index} style={styles.item}>
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`, width: 150, height: 150 }}
                />
                {/* <Text>{movie.title}</Text> */}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Buttons title="Continue" onPress={next} />
          <Button title="Continue" onPress={next} />
        </View>
      </View>
    </>
  );
};

export default Preference;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
  },
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
