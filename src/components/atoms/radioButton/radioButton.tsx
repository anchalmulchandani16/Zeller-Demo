import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {RadioButtonProps} from './types';

const RadioButton = ({selected, onPress, label}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.radioContainer, selected && styles.selectedContainer]}
      onPress={onPress}
      key={`radio-button-${label}`}
      testID={`radio-button-${label}`}>
      <View style={[styles.radioCircle, selected && styles.selectedCircle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
