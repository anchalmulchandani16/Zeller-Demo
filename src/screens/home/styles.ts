import {StyleSheet} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '@themes/index';

const Styles = StyleSheet.create({
  container: {flex: 1, padding: scale(20), backgroundColor: Colors.COLOR_WHITE},
  header: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: verticalScale(12),
    marginHorizontal: moderateScale(15),
  },
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  error: {color: Colors.COLOR_RED, textAlign: 'center'},
  selectedRoleText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginVertical: verticalScale(12),
    marginHorizontal: moderateScale(15),
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginVertical: verticalScale(12),
  },
});

export default Styles;
