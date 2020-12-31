import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigatorProps } from '../types';

interface PropsI {
  title: string;
  onPress?(): void;
}

const Buttons: FC<PropsI> = ({ title, onPress }) => {
  return (
    <View style={styles.btnWrapper}>
      <TouchableHighlight style={styles.btn} accessibilityLabel={title} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  btnWrapper: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#4b73ff',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
