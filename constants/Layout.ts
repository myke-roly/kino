import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.57,
};

export const WINDOW = {
  WIDTH: windowWidth,
  HEIGHT: windowHeight,
  isSmallDevice: windowWidth < 375,
};

export const ACTION_OFFSET = 100;
