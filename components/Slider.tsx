import React, { FC, useRef } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { NavigatorProps } from '../types';

import Subtitle from './Subtitle';

interface PropsI {
  items: any[];
  subtitle: string;
  navigation: NavigatorProps;
}

const Slider: FC<PropsI> = ({ subtitle, items, navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowScreen } = useWindowDimensions();

  return items ? (
    <View>
      <Subtitle subtitle={subtitle} />
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
        scrollEventThrottle={1}
      >
        {items.map((movie: any, index: number) => (
          <View style={[styles.item, { width: windowScreen / 2 - 20 }]}>
            <TouchableHighlight onPress={() => navigation.navigate<any>('Movie', { movieId: movie.id })} key={index}>
              <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} />
            </TouchableHighlight>
          </View>
        ))}
      </ScrollView>
    </View>
  ) : (
    <Text>No hay Entradas</Text>
  );
};

export default Slider;

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
