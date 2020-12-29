import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, LayoutAnimation, ScrollView, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { stylesGlobal } from '../styles';
import { movies } from './Preference';

const Search = () => {
  const [query, setQuery] = useState<string>('');

  function search() {
    console.log(`Buscar por ${query}`);
  }

  return (
    <View style={stylesGlobal.container}>
      <Title title="Search" />
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#ccc"
          placeholder="search"
          onChangeText={(text) => setQuery(text)}
        />
        <Feather size={18} name="search" color="#ccc" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapperInput: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    width: '80%',
    color: '#7b7b7b',
  },
});
