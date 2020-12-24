import config from 'react-native-config';

const local = false;

export const URL_BASE = local ? config.URL_BASE : config.URL_BASE;
