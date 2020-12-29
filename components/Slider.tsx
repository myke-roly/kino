import React, { FC, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, useWindowDimensions, View, Image } from 'react-native';
import Config from 'react-native-config';
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
        {movies.map((movie, index) => (
          <View key={index} style={[styles.item, { width: windowScreen / 2 - 20 }]}>
            <Image
              style={styles.img}
              source={{
                uri:
                  'https://ca-times.brightspotcdn.com/dims4/default/364fef9/2147483647/strip/true/crop/962x648+0+0/resize/840x566!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffa%2F8d%2F2142384341ddb873ff8af885c97c%2Flisto-para-la-nueva-temporada-1219614.JPG',
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
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
