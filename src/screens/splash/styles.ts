import {StyleSheet} from 'react-native';
import {Colors, scale} from '../../themes';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: scale(150),
    width: scale(150),
  },
});

export default Styles;
