import React, { FC } from 'react';
import { Text, TextInput, View, Linking } from 'react-native';
import ButtonForm from '../components/ButtonForm';
import SocialButton from '../components/SocialButton';
import { stylesGlobal } from '../styles';
import { NavigatorProps } from '../types';

interface PropsI {
  navigation: NavigatorProps;
}

export const Signin: FC<PropsI> = ({ navigation }) => {
  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.titleForm}>Sign In</Text>
      <SocialButton
        icon="google"
        accessibilityLabel="Sign In with Google account"
        onPres={() => Linking.openURL('https://google.com')}
      >
        Sign In with Google
      </SocialButton>
      <SocialButton
        icon="apple1"
        accessibilityLabel="Sign In with Apple account"
        onPres={() => Linking.openURL('https://apple.com')}
      >
        Sign In with Apple
      </SocialButton>
      <Text style={{ color: 'grey', textAlign: 'center' }}>or</Text>
      <TextInput
        style={stylesGlobal.input}
        placeholderTextColor="#ccc"
        placeholder="Email address"
        onChangeText={() => {}}
      />
      <TextInput
        style={stylesGlobal.input}
        placeholderTextColor="#ccc"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={() => {}}
      />
      <ButtonForm disable={true} sendForm={() => {}}>
        Sign In
      </ButtonForm>
      <Text style={{ marginTop: 20, color: '#4b73ff' }} onPress={() => console.log('reset password')}>
        Forgot Password?
      </Text>
      <Text style={{ marginTop: 10 }}>
        Don't have an account?{' '}
        <Text style={{ color: '#4b73ff', fontWeight: 'bold' }} onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Signin;
