import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Animated, StyleProp, TextStyle } from 'react-native';
import { ACTION_OFFSET, CARD } from '../constants/Layout';

interface Items {
  title: string;
  poster_path: string;
}

interface PropsI {
  item: Items;
  isFirst: boolean;
  swipe?: any;
  tiltSign?: any;
}

const Card: FC<PropsI> = ({ item, isFirst, swipe, tiltSign, ...rest }) => {
  const rotate = Animated.multiply(swipe?.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });
  const animatedStyle: StyleProp<TextStyle> = {
    transform: [...swipe?.getTranslateTransform(), { rotate }],
  };

  return (
    <Animated.View {...rest} style={[styles.card, isFirst && animatedStyle]}>
      <Image
        style={styles.cardImg}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.infoTitle}>{item.title}</Text>
        <View style={styles.infoSubtitles}>
          <Text style={styles.infoSubTitle}>Genre</Text>
          <Text style={styles.infoSubTitle}>2019</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 10,
    height: CARD.HEIGHT,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardImg: {
    width: '100%',
    height: 400,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  info: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  infoSubtitles: {
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoSubTitle: {
    fontSize: 14,
    color: '#acacac',
  },
});
