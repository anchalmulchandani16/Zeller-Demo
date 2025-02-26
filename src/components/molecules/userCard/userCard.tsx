import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '@components/index';
import Styles from './styles';
import {UserCardProps} from './types';

const UserCard = ({name, role, onPress}: UserCardProps) => {
  return (
    <TouchableOpacity testID="user-card" style={Styles.card} onPress={onPress}>
      <Avatar name={name} />
      <View style={Styles.info}>
        <Text style={Styles.name}>{name}</Text>
        <Text style={Styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
