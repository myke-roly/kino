import React, { FC, useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { stylesGlobal } from '../styles';
import SocialButton from '../components/SocialButton';
import ButtonForm from '../components/ButtonForm';
import { NavigatorProps } from '../types';

interface PropsI {
  navigation: NavigatorProps;
}

const Signup: FC<PropsI> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [terms, setTerms] = useState<boolean>(false);

  const handleChangeText = useCallback(
    (text) => {
      setEmail(text);
    },
    [email]
  );

  function CreateTermsModal() {
    return Alert.alert(
      'Termns & Condition',
      'Accept this termins and conditions?',
      [
        { text: 'yes', onPress: () => setTerms(true) },
        { text: 'cancel', onPress: () => setTerms(false), style: 'cancel' },
      ],
      { cancelable: false }
    );
  }

  function sendForm(): void {
    if (!terms) {
      return CreateTermsModal();
    }

    // Todo: send form to singup
    console.log('send form');
  }

  function isEmail(): boolean {
    return email.includes('@');
  }

  return (
    <View style={stylesGlobal.container}>
      <Text style={{ color: 'red' }}>{terms + ''}</Text>
      <Text style={stylesGlobal.titleForm}>Sing Up</Text>
      <SocialButton icon="google" onPres={() => console.log('login with google')}>
        Sign up with Google
      </SocialButton>
      {/* <SocialButton icon="apple1" onPres={() => console.log('login with apple')}>
        Sign up with Apple
      </SocialButton> */}
      <Text style={styles.placeholder}>Sign in with email</Text>
      <TextInput
        style={stylesGlobal.input}
        placeholderTextColor="#ccc"
        placeholder="Usernam"
        onChangeText={handleChangeText}
      />
      <TextInput
        style={stylesGlobal.input}
        placeholderTextColor="#ccc"
        placeholder="Email address"
        onChangeText={handleChangeText}
      />
      <TextInput
        style={stylesGlobal.input}
        placeholderTextColor="#ccc"
        placeholder="Password"
        onChangeText={handleChangeText}
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

      <View style={styles.footer}>
        <Text style={{ textAlign: 'center' }}>You are completely safe</Text>
        <View>
          <TouchableHighlight onPress={CreateTermsModal}>
            <Text style={styles.term}>Read our Terms & Conditions</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
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
    color: '#4b73ff',
    textAlign: 'center',
  },
});

export default Signup;
