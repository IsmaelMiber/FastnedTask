import {StyleSheet} from 'react-native';
import FONTS from '../../../../constants/fonts';

export const VEHICLE_OVERVIEW_HEIGHT = 80;

const styles = StyleSheet.create({
  vehicleOverview: {
    paddingVertical: 16,
    height: VEHICLE_OVERVIEW_HEIGHT,
  },
  brand: {
    fontFamily: FONTS.SemiBold,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
  },
  model: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    textAlign: 'left',
    color: 'grey',
  },
  version: {
    fontFamily: FONTS.Medium,
    fontSize: 14,
    textAlign: 'right',
    color: 'grey',
  },
  vehicleBottomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
