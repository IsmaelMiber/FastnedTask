import {TVehicle} from './Vehicle';

export type RootStackParamList = {
  Vehicles: undefined;
  VehicleDetails: {id: TVehicle['id']};
  Charging: {vehicle: TVehicle | undefined};
};
