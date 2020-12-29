import React, { FC, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { movies } from '../screens/Preference';
import Subtitle from './Subtitle';

interface PropsI {
  subtitle: string;
}

const Slider: FC<PropsI> = ({ subtitle }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowScreen } = useWindowDimensions();

  return (
    <View>
      <Subtitle subtitle={subtitle} />
      <ScrollView
        horizontal={false}
        pagingEnabled
        showsHorizontalScrollIndicator
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
      >
        <View style={styles.list}>
          {movies.map((movie, index) => (
            <View key={index} style={styles.item}>
              <Text>{movie.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    margin: 10,
    width: 150,
    height: 150,
    borderColor: '#333',
    borderWidth: 2,
  },
});
