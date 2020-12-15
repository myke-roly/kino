import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface PropsI {
  onPres?: () => void;
  name?: string;
  icon: string;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const SocialButton: FC<PropsI> = ({ name = '', icon, onPres }) => {
  return (
    <View style={styles.btnWrapper}>
      <TouchableHighlight style={styles.btn} accessibilityLabel={`go to singup to  ${name}`} onPress={onPres}>
        <Text style={styles.text}>
          <AntDesign size={18} name={icon} /> Sing up with {capitalize(name)}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  btnWrapper: {
    marginVertical: 15,
    width: '100%',
  },
  btn: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 18,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  text: {
    textAlign: 'center',
    color: '#383535',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
