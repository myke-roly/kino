import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, ActivityIndicator } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';

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
      <View style={styles.onboarding}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.onboarding}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Kino</Text>
      {/*redirect to Home*/}

      <View style={styles.btnWrapper}>
        <TouchableHighlight
          style={styles.btn}
          accessibilityLabel="Go Login"
          onPress={() => navigation.navigate('Layout')}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
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
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Onboarding;
