import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  brand: {
    fontFamily: FONTS.SemiBold,
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 8,
  },
  model: {
    fontFamily: FONTS.Regular,
    fontSize: 16,
    textAlign: 'left',
  },
  vehicleImg: {
    width: 250,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnsContainer: {
    flexDirection: 'row',
    columnGap: 16,
    marginVertical: 16,
  },
  btn: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
  },
  btnText: {
    fontFamily: FONTS.SemiBold,
    fontSize: 16,
    textAlign: 'center',
  },
  helpBtn: {
    backgroundColor: '#e11d48',
  },
  helpBtnText: {
    color: '#fff',
  },
  startChargingBtn: {
    backgroundColor: '#ffdd30',
  },
});

export default styles;
