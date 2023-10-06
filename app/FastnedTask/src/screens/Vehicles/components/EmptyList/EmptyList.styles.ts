import {StyleSheet} from 'react-native';
import FONTS from '../../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: FONTS.Medium,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
