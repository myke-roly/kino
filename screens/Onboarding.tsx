import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigatorProps } from '../types';
import { stylesGlobal } from '../styles';
import Buttons from '../components/Buttons';

interface PropsI {
  navigation: NavigatorProps;
}

const Onboarding: FC<PropsI> = ({ navigation }) => {
  return (
    <>
      <View style={stylesGlobal.containerCenter}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to Kino</Text>
        {/*redirect to Home*/}
      </View>
      <View style={{ padding: 20, backgroundColor: '#f8f8f8' }}>
        <Buttons
          onPress={() => {
            navigation.navigate('Signin');
          }}
          title="Continue"
        />
        <Button
          onPress={() => {
            navigation.navigate('Layout');
          }}
          title="Continue"
        />
        <Button
          onPress={() => {
            navigation.navigate('Signin');
          }}
          title="Continue"
        />
      </View>
    </>
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
});

export default Onboarding;
