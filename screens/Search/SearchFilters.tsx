import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchFilters = () => {
  const [ value, setValue] = useState<string>("")
  const handleChange = useCallback((text) => {
    setValue(text)
  }, [])
  
  return (
    <View>
      <Text>SearchFilters</Text>
      <View>
        <TextInput value="" onChangeText={handleChange} />
      </View>
      <Text>{value}</Text>
    </View>
  );
};

export default SearchFilters;

const styles = StyleSheet.create({});
