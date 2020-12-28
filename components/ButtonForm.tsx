import React, { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface PropsI {
  disable?: boolean;
  sendForm?(): void;
}

const ButtonForm: FC<PropsI> = ({ children, disable, sendForm }) => {
  return (
    <View style={styles.btnWrapper}>
      <TouchableHighlight disabled={disable} style={!disable ? styles.btn : styles.disable} onPress={sendForm}>
        <Text style={styles.btnText}>{children}</Text>
      </TouchableHighlight>
    </View>
  );
};

const baseBtn = {
  borderRadius: 50,
  paddingVertical: 18,
  shadowOpacity: 0.5,
  elevation: 5,
  marginTop: 25,
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: '100%',
  },
  btn: {
    ...baseBtn,
    backgroundColor: '#4b73ff',
  },
  disable: {
    ...baseBtn,
    backgroundColor: '#879be9',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
});

export default ButtonForm;
