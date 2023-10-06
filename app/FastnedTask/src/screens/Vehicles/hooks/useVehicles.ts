import {useCallback, useState} from 'react';
import {FlatListProps} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getVehicles} from '../../../API/API';
import {ITEM_SEPARATOR_HEIGHT} from '../Vehicles.styles';
import {TVehicle, TVehicles} from '../../../types/Vehicle';
import {VEHICLE_OVERVIEW_HEIGHT} from '../components/VehicleOverview/VehicleOverview.styles';
import useVehiclesSearch from './useVehiclesSearch';

export default function useVehicles() {
  const [searchedVehicles, setSearchedVehicles] = useState<
    TVehicles | undefined
  >([]);

  const {data, isLoading, isError, error, refetch, isRefetching} = useQuery<
    TVehicles,
    Error,
    TVehicles,
    string[]
  >({
    queryKey: ['vehicles'],
    queryFn: getVehicles,
    onSuccess: setSearchedVehicles,
  });

  const {searchText, setSearchText, onInputTextChange} = useVehiclesSearch(
    data,
    setSearchedVehicles,
  );

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
    setSearchText('');
    refetch({throwOnError: true});
  }, [setSearchText, refetch]);

  return {
    data,
    isLoading,
    isError,
    error,
    isRefetching,
    getItemLayout,
    onRefresh,
    searchedVehicles,
    setSearchedVehicles,
    searchText,
    onInputTextChange,
  };
}
