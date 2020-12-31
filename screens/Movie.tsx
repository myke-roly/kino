import React, { FC, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, Linking } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { getMovieSelector } from '../state/movies/movies.selector';
import { stylesGlobal } from '../styles';
import { NavigatorProps } from '../types';
import { getMovie } from '../state/movies/movies.actions';
import Loading from '../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { Feather } from '@expo/vector-icons';

interface PropsI {
  route: RouteProp<{ params: { movieId: string } }, 'params'>;
  navigation: NavigatorProps;
}

const Movie: FC<PropsI> = ({ route, navigation }) => {
  const { movieId } = route.params;
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => getMovieSelector(state));

  useEffect(() => {
    dispatch(getMovie({ movieId }));
  }, [movieId, dispatch]);

  // console.log(data);
  return (
    <>
      {isLoading && <Loading />}
      <View style={[stylesGlobal.container, { paddingHorizontal: 25 }]}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} />
        </TouchableOpacity> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}` }} />
          <View style={{ paddingVertical: 20 }}>
            <Title title={data?.title} />
            <Subtitle subtitle={data?.tagline} />
            <Text style={styles.textDate}>{data?.release_date}</Text>
            <Text style={styles.desc}>{data?.overview}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Button onPress={() => {}} title="Watch Trailer" />
            <Button onPress={() => Linking.openURL(data?.homepage)} title="Add to Saved" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Movie;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: '100%',
    height: 450,
    marginTop: 20,
  },
  textDate: {
    marginVertical: 10,
    color: '#b7b7b7',
    fontWeight: 'bold',
    fontSize: 20,
  },
  desc: {
    color: '#7b7b7b',
    fontSize: 14,
  },
});
