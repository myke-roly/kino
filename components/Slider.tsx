import React, { FC, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, useWindowDimensions, View, Image } from 'react-native';
import Subtitle from './Subtitle';

interface PropsI {
  items: any[];
  subtitle: string;
}

const Slider: FC<PropsI> = ({ subtitle, items }) => {
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
          <View key={index} style={[styles.item, { width: windowScreen / 2 - 20 }]}>
            <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} />
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
