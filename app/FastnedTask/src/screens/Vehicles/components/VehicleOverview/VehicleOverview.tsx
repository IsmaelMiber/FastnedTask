import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TVehicle} from '../../../../types/Vehicle';
import {useNavigation} from '@react-navigation/native';
import styles from './VehicleOverview.styles';

type Props = {
  vehicle: Partial<TVehicle>;
};

function VehicleOverview({vehicle}: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.vehicleOverview}
      onPress={() =>
        navigation.navigate('VehicleDetails', {
          id: vehicle.id,
        })
      }>
      <Text style={styles.brand}>{vehicle.brand}</Text>
      <View style={styles.vehicleBottomDetails}>
        <Text style={styles.model}>{vehicle.model}</Text>
        <Text style={styles.version}>{vehicle.version}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(VehicleOverview);
