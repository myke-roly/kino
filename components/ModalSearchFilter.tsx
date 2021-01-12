import { Feather } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import Subtitle from './Subtitle';
import Colors from '../constants/Colors';

const ModalSearchFilter = () => {
  const [query, setQuery] = useState<string>('');
  const searchMovies = useCallback(() => {
    console.log(query);
  }, [query]);

  const MAXIMUMYEAR: number = new Date().getFullYear();
  const MINIMUMYEAR: number = 1980;

  return (
    <ScrollView style={styles.content}>
      <TouchableWithoutFeedback>
        <View style={styles.wrapperInput}>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => setQuery(text)}
            placeholder="Search"
            placeholderTextColor="#ccc"
          />
          <Feather size={18} name="search" color="#ccc" onPress={searchMovies} />
        </View>
        <View style={styles.tags}>
          {['1996', 'Crime', 'Emma Watson'].map((item, index) => (
            <View style={styles.tag} key={index}>
              <Text style={styles.tagText}>{item}</Text>
              <TouchableOpacity onPress={() => console.log('Deleted Filter by: ', item)}>
                <Feather name="x" size={14} color={Colors.light.tint} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <Subtitle subtitle="Years" />
          <View>
            <Slider
              minimumValue={MINIMUMYEAR}
              maximumValue={MAXIMUMYEAR}
              minimumTrackTintColor={Colors.light.tint}
              maximumTrackTintColor="#333"
              thumbTintColor={Colors.light.tint}
              onValueChange={(value) => console.log(value)}
              onSlidingStart={() => console.log('starting...')}
            />
          </View>
        </View>
        <View>
          <Subtitle subtitle="Generes" />
          {/*TODO: Traer datos de la api genres*/}
          <Text>Drama, Crime</Text>
        </View>
        <View>
          <Subtitle subtitle="Countries" />
          {/*TODO: Traer datos de la api genres*/}
          <Text>USA, Canada,....</Text>
        </View>
        <View>
          <Subtitle subtitle="Actors" />
          {/*TODO: Traer datos de la api genres*/}
          <Text>Emma Watson, Dakona Jonson,...</Text>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#555',
    shadowRadius: 20,
    elevation: 10,
  },
  wrapperInput: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f8f8f8',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  inputText: {
    width: '80%',
    fontSize: 16,
    color: '#ccc',
  },
  tags: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tag: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  tagText: {
    marginRight: 5,
  },
});

export default ModalSearchFilter;
