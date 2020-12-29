import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stylesGlobal } from '../styles';

const Home = () => {
  const [option, setOption] = useState<boolean>(true);
  function toggleOptions() {
    setOption((state) => !state);
  }
  return (
    <View style={[stylesGlobal.container, styles.main]}>
      <Text style={styles.title}>
        <Text onPress={toggleOptions} style={[{ color: option ? '#000' : '#ddd' }, styles.titleOption]}>
          Movies
        </Text>{' '}
        |{' '}
        <Text onPress={toggleOptions} style={[{ color: !option ? '#000' : '#ddd' }, styles.titleOption]}>
          TV Shows
        </Text>
      </Text>
      <View style={styles.card}>
        <Image
          style={styles.cardImg}
          source={{
            uri: 'https://www.edgehill.ac.uk/events/files/2020/09/Jumanji-The-Next-Level.jpg',
          }}
        />
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Jumanji</Text>
          <View style={styles.infoSubtitles}>
            <Text style={styles.infoSubTitle}>Genre</Text>
            <Text style={styles.infoSubTitle}>2019</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text style={styles.btn}>
            <Feather name="x" size={20} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>
            <Feather name="check" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 40,
    marginTop: 20,
    fontSize: 24,
  },
  titleOption: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    // ...stylesGlobal.shadow,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardImg: {
    width: '100%',
    height: 400,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  info: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  infoSubtitles: {
    marginVertical: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoSubTitle: {
    fontSize: 14,
    color: '#acacac',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  btn: {
    padding: 15,
    backgroundColor: '#4b73ff',
    borderRadius: 100,
  },
});
