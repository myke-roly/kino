import React, { FC } from 'react';
import { Animated, PanResponderInstance, StyleSheet, View } from 'react-native';

import Card from './Card';

interface PropsI {
  items: any[];
  panResponder: PanResponderInstance;
  swipe: Animated.ValueXY;
  tiltSign: Animated.Value;
}

const Cards: FC<PropsI> = ({ items, panResponder, swipe, tiltSign }) => {
  return (
    <View style={styles.container}>
      {items
        .map((item, index) => {
          const isFirst = index === 0;
          const drag = isFirst ? panResponder.panHandlers : {};

          return <Card item={item} key={index} isFirst={isFirst} swipe={swipe} tiltSign={tiltSign} {...drag} />;
        })
        .reverse()}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '80%',
  },
});
