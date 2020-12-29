import React, { FC, useEffect } from 'react';
import { Text, TextInput, View, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonForm from '../components/ButtonForm';
import Loading from '../components/Loader';
import SocialButton from '../components/SocialButton';
import { useAuthentication } from '../hooks/useAsyncStorage';
import { signinSelector } from '../state/auth/auth.selector';
import { TYPES } from '../state/auth/auth.types';
import { stylesGlobal } from '../styles';
import { NavigatorProps } from '../types';

interface PropsI {
  navigation: NavigatorProps;
}

export const Signin: FC<PropsI> = ({ navigation }) => {
  const dispatch = useDispatch<any>();
  const { data, loading } = useSelector((state) => signinSelector(state));

  const { token, getToken, saveToken } = useAuthentication();
  console.log(token);

  function sendForm() {
    const user = {
      email: 'mykeroly@gmail.com',
      password: '555111444',
    };
    dispatch({ type: TYPES.SIGNIN_REQUEST, user: user });
  }

  useEffect(() => {
    getToken();
    if (token) navigation.replace('Layout');
    if (data?.token) {
      saveToken(data.token);
      navigation.navigate('Preference');
    }
  }, [data, token]);

  return (
    <>
      {loading && <Loading />}
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
        <ButtonForm sendForm={sendForm}>Sign In</ButtonForm>
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
    </>
  );
};

// const styles = StyleSheet.create({});

export default Signin;
