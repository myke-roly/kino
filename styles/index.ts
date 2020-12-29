import { StyleSheet } from 'react-native';

export const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 30,
  },
  titleForm: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    margin: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: '#383535',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.5,

    elevation: 12,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.5,

    elevation: 1,
  },
});
