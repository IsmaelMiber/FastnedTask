import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  chargingBarContainer: {
    marginTop: 25,
  },
  barBody: {
    height: 50,
  },
  barItem: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  shadow: {
    alignSelf: 'center',
    marginTop: 22,
    height: 10,
    width: '90%',
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderRadius: 10 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 12,
  },
  chargingDetailsContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chargingPercentage: {
    fontFamily: FONTS.SemiBold,
    fontSize: 36,
    color: 'rgb(146, 209, 72)',
    textAlign: 'center',
  },
  label: {
    fontFamily: FONTS.Medium,
    fontSize: 16,
    textAlign: 'center',
  },
  value: {
    fontFamily: FONTS.Regular,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
