import {StyleSheet} from 'react-native';
import FONTS from '../../../../constants/fonts';

const styles = StyleSheet.create({
  textWithLabelContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  label: {
    fontFamily: FONTS.SemiBold,
    fontSize: 16,
  },
  text: {
    fontFamily: FONTS.Regular,
    fontSize: 16,
  },
});

export default styles;
