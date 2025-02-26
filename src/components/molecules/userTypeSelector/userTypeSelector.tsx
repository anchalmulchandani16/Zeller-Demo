import React from 'react';
import {View} from 'react-native';
import Styles from './styles';
import {RadioButton} from '@components/index';
import {UserTypeSelectorProps} from './types';
import {STRINGS} from '@utils/index';

const UserTypeSelector = ({selectedRole, onSelect}: UserTypeSelectorProps) => {
  return (
    <View testID="user-type-selector" style={Styles.container}>
      {[STRINGS.ADMIN, STRINGS.MANAGER].map(role => (
        <RadioButton
          key={role}
          label={role}
          selected={selectedRole === role}
          onPress={() => onSelect(role)}
        />
      ))}
    </View>
  );
};

export default UserTypeSelector;
