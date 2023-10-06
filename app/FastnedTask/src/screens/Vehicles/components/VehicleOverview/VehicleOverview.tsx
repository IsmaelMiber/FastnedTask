import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {TVehicle} from '../../../../types/Vehicle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import styles from './VehicleOverview.styles';
import {RootStackParamList} from '../../../../types/Navigation';

type Props = {
  vehicle: Partial<TVehicle> | undefined;
  asView?: boolean;
};

function VehicleOverview({vehicle, asView = false}: Props) {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'VehicleDetails'>>();

  const onPress = useCallback(() => {
    if (vehicle?.id) {
      navigation.navigate('VehicleDetails', {
        id: vehicle.id,
      });
    }
  }, [navigation, vehicle]);

  if (!vehicle) {
    return null;
  }

  return (
    <TouchableOpacity
      testID={vehicle.brand}
      style={styles.vehicleOverview}
      onPress={onPress}
      disabled={asView}>
      <Text style={styles.brand}>{vehicle.brand}</Text>
      <View style={styles.vehicleBottomDetails}>
        <Text style={styles.model}>{vehicle.model}</Text>
        <Text style={styles.version}>{vehicle.version}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(VehicleOverview);
