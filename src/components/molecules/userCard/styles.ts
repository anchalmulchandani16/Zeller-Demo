import {StyleSheet} from 'react-native';
import {Colors, moderateScale} from '@themes/index';

const Styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  info: {
    marginLeft: moderateScale(10),
  },
  name: {
    fontWeight: 'bold',
  },
  role: {
    color: Colors.COLOR_D_GREY,
  },
});

export default Styles;
