import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PropsI {
  title: string;
}

const Title: FC<PropsI> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
