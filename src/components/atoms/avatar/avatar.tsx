import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import {AvatarProps} from './types';

const Avatar = ({name}: AvatarProps) => {
  return (
    <View style={Styles.avatar}>
      <Text style={Styles.text}>{name.charAt(0)}</Text>
    </View>
  );
};

export default Avatar;
