import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginStart: 16,
    marginVertical: 16,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 4,
  },
  backBtnIcon: {
    aspectRatio: 1 / 1,
    width: 16,
    marginEnd: 4,
  },
  backBtnText: {
    fontFamily: FONTS.SemiBold,
    color: '#292D32',
  },
});

export default styles;
