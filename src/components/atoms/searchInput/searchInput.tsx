import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
import {SearchInputProps} from './types';

const SearchInput = ({value, onChangeText, placeholder}: SearchInputProps) => {
  return (
    <TextInput
      testID="search-input"
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder || 'Search...'}
    />
  );
};

export default SearchInput;
