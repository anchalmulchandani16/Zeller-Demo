import {StyleSheet} from 'react-native';
import {Colors, moderateScale, scale, verticalScale} from '@themes/index';

export const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(4),
    borderRadius: scale(8),
    marginBottom: verticalScale(8),
  },
  selectedContainer: {
    backgroundColor: Colors.COLOR_L_BLUE,
  },
  radioCircle: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: Colors.COLOR_GREY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: verticalScale(12),
  },
  selectedCircle: {
    borderColor: Colors.COLOR_D_BLUE,
  },
  innerCircle: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    backgroundColor: Colors.COLOR_D_BLUE,
  },
  radioText: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
