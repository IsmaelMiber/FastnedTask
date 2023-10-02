import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vehicles from '../screens/Vehicles/Vehicles';
import VehicleDetails from '../screens/VehicleDetails/VehicleDetails';
import Charging from '../screens/Charging/Charging';
import {RootStackParamList} from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Vehicles" screenOptions={screenOptions}>
      <Stack.Screen name="Vehicles" component={Vehicles} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="Charging" component={Charging} />
    </Stack.Navigator>
  );
}
