import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import {useRoute} from '@react-navigation/native';

const UserDetailsScreen = () => {
  const {params} = useRoute();
  const userName = params?.item?.name ?? 'Guest'; // Fallback to "Guest"
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{`Welcome ${userName}`}</Text>
    </View>
  );
};

export default UserDetailsScreen;
