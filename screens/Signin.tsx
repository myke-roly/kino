import React, { FC, useEffect, useState } from 'react';
import { Text, TextInput, View, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonForm from '../components/ButtonForm';
import Loading from '../components/Loader';
import SocialButton from '../components/SocialButton';
import { signIn } from '../firebase';
import { SigninRequest } from '../state/auth/auth.actions';
import { signinSelector } from '../state/auth/auth.selector';
import { TYPES, UserI } from '../state/auth/auth.types';
import { stylesGlobal } from '../styles';
import { NavigatorProps } from '../types';

interface PropsI {
  navigation: NavigatorProps;
}

export const Signin: FC<PropsI> = ({ navigation }) => {
  const dispatch = useDispatch<any>();
  const { isLoading } = useSelector((state) => signinSelector(state));
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function sendForm() {
    const user = {
      email,
      password,
    };
    dispatch(SigninRequest({ user }));

    try {
      // await signIn(user);
    } catch (error) {
      console.log(error);
    }

    // navigation.replace('Layout');
  }

  return (
    <>
      {isLoading && <Loading />}
      <View style={[stylesGlobal.containerCenter, { paddingHorizontal: 20 }]}>
        <Text style={stylesGlobal.titleForm}>Sign In</Text>
        <SocialButton
          icon="google"
          accessibilityLabel="Sign In with Google account"
          onPres={() => Linking.openURL('https://google.com')}
        >
          Sign In with Google
        </SocialButton>
        {/* <SocialButton
          icon="apple1"
          accessibilityLabel="Sign In with Apple account"
          onPres={() => Linking.openURL('https://apple.com')}
        >
          Sign In with Apple
        </SocialButton> */}
        <Text style={{ color: 'grey', textAlign: 'center' }}>or</Text>
        <TextInput
          style={stylesGlobal.input}
          placeholderTextColor="#ccc"
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={stylesGlobal.input}
          placeholderTextColor="#ccc"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
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
