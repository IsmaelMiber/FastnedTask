import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Screen from '../Screen/Screen';
import styles from './VehicleDetails.styles';
import TextWithLabel from './components/TextWithLabel/TextWithLabel';
import useVehicleDetails from './hooks/useVehicleDetails';
import ImageWithLoader from './components/ImageWithLoader/ImageWithLoader';

function VehicleDetails() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    onStartChargingBtnPress,
    openLinkOnPress,
  } = useVehicleDetails();

  const {
    brand,
    model,
    imageUrl,
    version,
    connectorType,
    recommendedCharger,
    helpUrl,
  } = data || {};

  return (
    <Screen
      isLoading={isLoading}
      isError={isError}
      error={error}
      testID="VehicleDetails">
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.model}>{model}</Text>

        <ImageWithLoader
          source={{uri: imageUrl}}
          style={styles.vehicleImg}
          resizeMode="contain"
        />

        <TextWithLabel label="Version:" text={version} />
        <TextWithLabel label="Connector type:" text={connectorType} />
        <TextWithLabel label="Recommended charger:" text={recommendedCharger} />

        <View style={styles.footer}>
          <View style={styles.btnsContainer}>
            {helpUrl ? (
              <TouchableOpacity
                style={[styles.btn, styles.helpBtn]}
                onPress={openLinkOnPress}>
                <Text style={[styles.btnText, styles.helpBtnText]}>Help</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              testID="charging-button"
              style={[styles.btn, styles.startChargingBtn]}
              onPress={onStartChargingBtnPress}>
              <Text style={styles.btnText}>Start Charging</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default VehicleDetails;
