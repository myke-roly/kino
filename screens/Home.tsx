import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { stylesGlobal } from '../styles';
import { ACTION_OFFSET, CARD } from '../constants/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { moviesSelector } from '../state/movies/movies.selector';
import { TYPES } from '../state/movies/movies.types';

import Loading from '../components/Loader';
import Cards from '../components/Cards';
import { getMovies } from '../state/movies/movies.actions';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [option, setOption] = useState<boolean>(true);
  function toggleOptions() {
    setOption((state) => !state);
  }

  const dispatch = useDispatch();
  const { data: movies, isLoading } = useSelector((state) => moviesSelector(state));

  useEffect(() => {
    dispatch(getMovies({ page }));
  }, [dispatch, page]);

  const [cards, setCards] = useState<any[]>(movies ? movies?.results : []);

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dy, dx }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;
      console.log('CONSTANTES', Math.abs(dx), direction);

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 400,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 4,
        }).start();
      }
    },
  });

  const saveCards = (idMovie: string | number) => {
    dispatch({ type: TYPES.SAVE_MOVIE_REQUEST, movie: idMovie });
  };

  const removeTopCard = useCallback(() => {
    setCards((state) => state.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const pressButtons = useCallback(
    (direction) => {
      Animated.timing(swipe, {
        toValue: {
          x: direction * 500,
          y: 0,
        },
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [swipe, removeTopCard]
  );

  useEffect(() => {
    if (movies && !cards.length) {
      setPage((prevState) => prevState + 1);
      setCards(movies?.results);
    }
  }, [cards, page, movies]);

  console.log(movies, cards);

  return (
    <>
      {isLoading && <Loading />}
      <View style={[stylesGlobal.container, styles.main]}>
        <Text style={styles.title}>
          <Text onPress={toggleOptions} style={[{ color: option ? '#000' : '#ddd' }, styles.titleOption]}>
            Movies
          </Text>{' '}
          |{' '}
          <Text onPress={toggleOptions} style={[{ color: !option ? '#000' : '#ddd' }, styles.titleOption]}>
            TV Shows
          </Text>
        </Text>

        {movies && cards && <Cards items={cards} panResponder={panResponder} swipe={swipe} tiltSign={tiltSign} />}

        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => pressButtons(-1)}>
            <Text style={styles.btn}>
              <Feather name="x" size={20} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressButtons(1)}>
            <Text style={styles.btn}>
              <Feather name="check" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 40,
    fontSize: 24,
  },
  titleOption: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  btn: {
    padding: 15,
    backgroundColor: '#4b73ff',
    borderRadius: 100,
  },
});
