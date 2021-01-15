import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Title from '../../components/Title';
import { stylesGlobal } from '../../styles';
import Slider from '../../components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector, trendingMoviesSelector } from '../../state/movies/movies.selector';
import Loading from '../../components/Loader';
import { NavigatorProps } from '../../types';
import { getMovies, getTrendingMovies } from '../../state/movies/movies.actions';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ModalSearchFilter from '../../components/ModalSearchFilter';

interface PropsI {
  navigation: NavigatorProps;
}

const Search: FC<PropsI> = ({ navigation }) => {
  const [openModalFilters, setModalOpenFilters] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { data: trendigMovies, isLoading } = useSelector((state) => trendingMoviesSelector(state));
  const { data: discoverMovies } = useSelector((state) => moviesSelector(state));

  useEffect(() => {
    if (!trendigMovies) {
      dispatch(getTrendingMovies());
    }
    if (!discoverMovies) {
      dispatch(getMovies({ page: 1 }));
    }
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <ScrollView style={stylesGlobal.container}>
        <TouchableWithoutFeedback onPress={() => console.log('Hidden modal')}>
          <Title title="Search" />
          <TouchableOpacity activeOpacity={0.7} onPress={() => setModalOpenFilters(true)}>
            <View style={styles.wrapperInput}>
              <Text style={styles.inputText}>Search</Text>
              <Feather size={18} name="search" color="#ccc" />
            </View>
          </TouchableOpacity>
          <View style={{ marginVertical: 30 }}>
            <Slider items={trendigMovies?.results} subtitle="Trending" navigation={navigation} />
            <Slider items={discoverMovies?.results} subtitle="Discover" navigation={navigation} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {openModalFilters && <ModalSearchFilter />}
    </>
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
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  inputText: {
    width: '80%',
    fontSize: 16,
    color: '#ccc',
  },
});
