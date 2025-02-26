import {StyleSheet} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '@themes/index';

export const styles = StyleSheet.create({
  input: {
    height: scale(40),
    borderWidth: scale(1),
    borderRadius: scale(20),
    marginBottom: verticalScale(16),
    paddingHorizontal: moderateScale(10),
    borderColor: Colors.COLOR_GREY,
    marginHorizontal: moderateScale(15),
    marginVertical: verticalScale(15),
  },
});
