import {StyleSheet} from 'react-native';
import {Colors, scale} from '@themes/index';

const Styles = StyleSheet.create({
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(8),
    backgroundColor: Colors.COLOR_L_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.COLOR_D_BLUE,
  },
});

export default Styles;
