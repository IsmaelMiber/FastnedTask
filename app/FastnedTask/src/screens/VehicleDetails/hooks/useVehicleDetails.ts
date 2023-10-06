import {useQuery} from '@tanstack/react-query';
import {getVehicleDetails} from '../../../API/API';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/Navigation';
import {useCallback} from 'react';
import {Linking} from 'react-native';

export default function useVehicleDetails() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'VehicleDetails'>>();
  const {params} = useRoute<RouteProp<RootStackParamList, 'VehicleDetails'>>();
  const {id} = params;

  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery({
    queryKey: ['vehicleDetails', id],
    queryFn: () => getVehicleDetails(id),
  });

  const {helpUrl} = data || {};

  const onStartChargingBtnPress = useCallback(() => {
    requestAnimationFrame(() => {
      navigation.navigate('Charging', {
        vehicle: data,
      });
    });
  }, [navigation, data]);

  const openLinkOnPress = useCallback(() => {
    if (helpUrl) {
      requestAnimationFrame(() => {
        Linking.canOpenURL(helpUrl).then(() => {
          Linking.openURL(helpUrl);
        });
      });
    }
  }, [helpUrl]);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    onStartChargingBtnPress,
    openLinkOnPress,
  };
}