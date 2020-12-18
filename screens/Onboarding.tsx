import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigatorProps } from '../types';
import { stylesGlobal } from '../styles';

interface PropsI {
  navigation: NavigatorProps;
}

const Onboarding: FC<PropsI> = ({ navigation }) => {
  return (
    <View style={stylesGlobal.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Kino</Text>
      {/*redirect to Home*/}

      <View style={styles.btnWrapper}>
        <TouchableHighlight
          style={styles.btn}
          accessibilityLabel="Go Signup"
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
    color: '#2c2929',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  btnWrapper: {
    position: 'absolute',
    bottom: 50,
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

export default Onboarding;
