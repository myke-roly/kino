import React, { useCallback, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { stylesGlobal } from '../styles';
import SocialButton from '../components/SocialButton';

const Signup = () => {
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

  function sendForm() {
    if (!terms) {
      return CreateTermsModal();
    }

    // Todo: send form to singup
    console.log('send form');
  }

  function isEmail() {
    return email.includes('@');
  }

  return (
    <View style={stylesGlobal.container}>
      <Text style={{ color: 'red' }}>{terms + ''}</Text>
      <Text style={styles.title}>Sing Up</Text>
      <SocialButton name="google" icon="google" onPres={() => console.log('login with google')} />
      <SocialButton name="apple" icon="apple1" onPres={() => console.log('login with apple')} />
      <Text style={styles.placeholder}>Or get a link emailed to you</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder="Email address"
        onChangeText={handleChangeText}
      />
      <View style={styles.btnWrapper}>
        <TouchableHighlight disabled={!isEmail()} style={isEmail() ? styles.btn : styles.disable} onPress={sendForm}>
          <Text style={styles.btnText}>Email me a singup link</Text>
        </TouchableHighlight>
      </View>
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

const baseBtn = {
  borderRadius: 50,
  paddingVertical: 18,
  shadowOpacity: 0.5,
  elevation: 5,
  marginTop: 25,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  placeholder: {
    color: '#ccc',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowOpacity: 0.5,
    elevation: 2,
    color: '#ccc',
  },
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
  footer: {
    marginTop: 20,
  },
  term: {
    color: '#4b73ff',
    textAlign: 'center',
  },
});

export default Signup;
