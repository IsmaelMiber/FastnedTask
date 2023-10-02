import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';

export const ITEM_SEPARATOR_HEIGHT = 2;

const styles = StyleSheet.create({
  list: {
    marginVertical: 16,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 30,
    textAlign: 'left',
  },
  separator: {
    height: ITEM_SEPARATOR_HEIGHT,
    backgroundColor: '#eee',
  },
});

export default styles;
