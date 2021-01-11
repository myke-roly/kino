import React, { FC, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import { stylesGlobal } from '../styles';
import SocialButton from '../components/SocialButton';
import ButtonForm from '../components/ButtonForm';
import Loading from '../components/Loader';

import { NavigatorProps, UserSignupI } from '../types';
import { signUp } from '../firebase';

interface PropsI {
  navigation: NavigatorProps;
}

const Signup: FC<PropsI> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  function CreateTermsModal() {
    return Alert.alert('Termns & Condition');
  }

  function sendForm() {
    const user: UserSignupI = {
      email,
      password,
    };

    signUp(user);
    navigation.replace('Layout');

    setUsername('');
    setEmail('');
    setPassword('');
  }

  function isEmail(): boolean {
    return email.includes('@');
  }

  return (
    <>
      <View style={[stylesGlobal.containerCenter, { paddingHorizontal: 20 }]}>
        <Text style={stylesGlobal.titleForm}>Sign Up</Text>
        <SocialButton icon="google" onPres={() => console.log('login with google')}>
          Sign up with Google
        </SocialButton>
        {/* <SocialButton icon="apple1" onPres={() => console.log('login with apple')}>
        Sign up with Apple
      </SocialButton> */}
        <Text style={styles.placeholder}>Or</Text>
        <TextInput
          style={stylesGlobal.input}
          placeholderTextColor="#ccc"
          placeholder="Email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={stylesGlobal.input}
          placeholderTextColor="#ccc"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <ButtonForm disable={!isEmail()} sendForm={sendForm}>
          Sign Up
        </ButtonForm>
        <Text style={{ marginTop: 20 }}>
          Have an account?{' '}
          <Text style={{ color: '#4b73ff', fontWeight: 'bold' }} onPress={() => navigation.navigate('Signin')}>
            Sign In
          </Text>
        </Text>
        <Text>{email}</Text>
        <Text>{username}</Text>
        <Text>{password}</Text>

        <View style={styles.footer}>
          <Text style={styles.term}>
            By continuinig, you agree to KinoApp{' '}
            <Text style={styles.readTerm} onPress={CreateTermsModal}>
              Terms of Service.
            </Text>
            . We will manage information about you as describe in our Privacy Policy and Cookie Policy
          </Text>
          <View></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: '#ccc',
    marginVertical: 20,
  },
  footer: {
    marginTop: 20,
  },
  term: {
    color: '#bbb',
    textAlign: 'center',
  },
  readTerm: {
    color: '#4b73ff',
    textAlign: 'center',
  },
});

export default Signup;
