import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface PropsI {
  subtitle: string;
}

const Subtitle: FC<PropsI> = ({ subtitle }) => {
  return <Text style={styles.subtitle}>{subtitle}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
});
