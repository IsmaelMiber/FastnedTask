import {View, Text} from 'react-native';
import React from 'react';
import Screen from '../Screen/Screen';
import styles from './Charging.styles';
import LottieView from 'lottie-react-native';
import VehicleOverview from '../Vehicles/components/VehicleOverview/VehicleOverview';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/Navigation';
import useCharging from './hooks/useCharging';

type Props = NativeStackScreenProps<RootStackParamList, 'Charging'>;

function Charging({route}: Props) {
  const {params} = route;
  const {vehicle} = params;

  const {chargeSpeedInKw, progress, energyProgress, percentage, stopAnimation} =
    useCharging(vehicle);
  return (
    <Screen testID="Charging">
      <View style={styles.container}>
        <VehicleOverview asView vehicle={vehicle} />
        <View style={styles.chargingBarContainer}>
          {/* Bar Top */}
          <LottieView
            source={require('../../assets/lotties/barTop.json')}
            style={styles.barItem}
            progress={progress}
            loop={false}
          />
          {/* Bar Body */}
          <LottieView
            source={require('../../assets/lotties/barBody.json')}
            style={styles.barBody}
            progress={progress}
            loop={false}
          />
          <View style={styles.shadow} />
          {/* Bar Thunder */}
          <LottieView
            source={require('../../assets/lotties/barThunder.json')}
            autoPlay
            loop={stopAnimation}
            style={styles.barItem}
          />
          {/* Bar Shine */}
          <LottieView
            source={require('../../assets/lotties/barShine.json')}
            autoPlay
            loop={stopAnimation}
            style={styles.barItem}
            speed={percentage <= 80 ? 0.25 : 1}
          />
        </View>

        <View style={styles.chargingDetailsContainer}>
          <View>
            <Text style={styles.label}>kWh</Text>
            <Text style={styles.value}>{energyProgress}</Text>
          </View>
          <Text style={styles.chargingPercentage}>{percentage}%</Text>
          <View>
            <Text style={styles.label}>Speed</Text>
            <Text style={styles.value}>{chargeSpeedInKw} kW</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

export default Charging;
