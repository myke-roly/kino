import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Title from '../components/Title';
import { stylesGlobal } from '../styles';
import Slider from '../components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector, trendingMoviesSelector } from '../state/movies/movies.selector';
import { TYPES } from '../state/movies/movies.types';
import Loading from '../components/Loader';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const { data: trendigMovies, isLoading } = useSelector((state) => trendingMoviesSelector(state));
  const { data: discoverMovies } = useSelector((state) => moviesSelector(state));

  function search() {
    dispatch({ type: TYPES.SEARCH_MOVIES_REQUEST, query: query });
  }

  useEffect(() => {
    if (!trendigMovies) {
      dispatch({ type: TYPES.GET_TRENDING_MOVIES_REQUEST });
    }
    if (!discoverMovies) {
      dispatch({ type: TYPES.GET_MOVIES_REQUEST, page: 1 });
    }
  }, []);

  return (
    <ScrollView style={stylesGlobal.container}>
      <Title title="Search" />
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="search"
          onChangeText={(text) => setQuery(text)}
        />
        <Feather size={18} name="search" color="#ccc" />
      </View>
      <View style={{ marginVertical: 30 }}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Slider items={trendigMovies?.results} subtitle="Trending" />
            <Slider items={discoverMovies?.results} subtitle="Discover" />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapperInput: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    width: '80%',
    color: '#7b7b7b',
  },
});
