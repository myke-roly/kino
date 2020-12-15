import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, ActivityIndicator } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import { stylesGlobal } from '../styles';

type OnboardingNavigatorProps = StackNavigationProp<RootStackParamList>;

interface PropsI {
  navigation: OnboardingNavigatorProps;
}

const Onboarding: FC<PropsI> = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    AndikaNewBasic: require('../assets/fonts/AndikaNewBasic-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={stylesGlobal.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={stylesGlobal.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Kino</Text>
      {/*redirect to Home*/}

      <View style={styles.btnWrapper}>
        <TouchableHighlight
          style={styles.btn}
          accessibilityLabel="Go Signup"
          onPress={() => navigation.navigate('Signup')}
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
    fontFamily: Platform.OS ? 'SpaceMono' : 'AndikaNewBasic',
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
