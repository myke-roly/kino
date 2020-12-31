import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface PropsI {
  onPres?: () => void;
  icon: string;
  accessibilityLabel?: string;
}

const SocialButton: FC<PropsI> = ({ children, icon, onPres, accessibilityLabel }) => {
  return (
    <View style={styles.btnWrapper}>
      <TouchableHighlight style={styles.btn} accessibilityLabel={accessibilityLabel} onPress={onPres}>
        <Text style={styles.text}>
          <AntDesign size={18} name={icon} /> {children}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.5,

    elevation: 12,
  },
  text: {
    textAlign: 'center',
    color: '#383535',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
