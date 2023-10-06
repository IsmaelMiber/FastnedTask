import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TextInput,
} from 'react-native';
import Screen from '../Screen/Screen';
import styles from './Vehicles.styles';
import {TVehicle} from '../../types/Vehicle';
import useVehicles from './hooks/useVehicles';
import VehicleOverview from './components/VehicleOverview/VehicleOverview';
import EmptyList from './components/EmptyList/EmptyList';

function Vehicles() {
  const {
    isLoading,
    isError,
    error,
    isRefetching,
    getItemLayout,
    onRefresh,
    searchedVehicles,
    searchText,
    onInputTextChange,
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
      <TextInput
        value={searchText}
        onChange={onInputTextChange}
        style={styles.searchInput}
        placeholder="Search"
        autoComplete="off"
        autoCorrect={false}
        blurOnSubmit
        returnKeyType="search"
        onSubmitEditing={onInputTextChange}
        testID="search-input"
      />
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headerText}>All Vehicles</Text>
        }
        data={searchedVehicles}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        onRefresh={onRefresh}
        refreshing={isRefetching}
        ListEmptyComponent={<EmptyList searchText={searchText} />}
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
