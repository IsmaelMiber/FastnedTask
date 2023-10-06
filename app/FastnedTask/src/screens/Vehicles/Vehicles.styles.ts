import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';

export const ITEM_SEPARATOR_HEIGHT = 2;

const styles = StyleSheet.create({
  list: {
    marginVertical: 16,
  },
  contentContainer: {
    flexGrow: 1,
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
  searchInput: {
    borderBottomWidth: ITEM_SEPARATOR_HEIGHT,
    borderColor: '#eee',
    marginHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    fontFamily: FONTS.SemiBold,
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
