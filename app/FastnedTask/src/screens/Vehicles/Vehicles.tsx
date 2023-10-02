import React, {useCallback} from 'react';
import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import Screen from '../Screen/Screen';
import styles from './Vehicles.styles';
import {TVehicle} from '../../types/Vehicle';
import useVehicles from './hooks/useVehicles';
import VehicleOverview from './components/VehicleOverview/VehicleOverview';

function Vehicles() {
  const {
    data,
    isLoading,
    isError,
    error,
    isRefetching,
    getItemLayout,
    onRefresh,
  } = useVehicles();

  const renderItem = useCallback(
    ({item: vehicle}: ListRenderItemInfo<Partial<TVehicle>>) => {
      return <VehicleOverview vehicle={vehicle} />;
    },
    [],
  );

  return (
    <Screen
      isLoading={isLoading}
      isError={isError}
      error={error}
      withBackBtn={false}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headerText}>All Vehicles</Text>
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        onRefresh={onRefresh}
        refreshing={isRefetching}
      />
    </Screen>
  );
}

function keyExtractor(item: Partial<TVehicle>) {
  return `${item.id}`;
}

function Separator() {
  return <View style={styles.separator} />;
}

export default Vehicles;
