import {useCallback} from 'react';
import {FlatListProps} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getVehicles} from '../../../API/API';
import {ITEM_SEPARATOR_HEIGHT} from '../Vehicles.styles';
import {TVehicle} from '../../../types/Vehicle';
import {VEHICLE_OVERVIEW_HEIGHT} from '../components/VehicleOverview/VehicleOverview.styles';

export default function useVehicles() {
  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
  });

  const getItemLayout = useCallback(
    (_: FlatListProps<Partial<TVehicle>>['data'], index: number) => {
      return {
        length: VEHICLE_OVERVIEW_HEIGHT,
        offset: (VEHICLE_OVERVIEW_HEIGHT + ITEM_SEPARATOR_HEIGHT) * index,
        index,
      };
    },
    [],
  );

  const onRefresh = useCallback(() => {
    refetch({throwOnError: true});
  }, [refetch]);

  return {
    data,
    isLoading,
    isError,
    error,
    isRefetching,
    getItemLayout,
    onRefresh,
  };
}
