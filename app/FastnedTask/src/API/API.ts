import {TVehicles, TVehicle} from '../types/Vehicle';

const PORT = 8485;
const BASE_URL = `http://localhost:${PORT}`;
const VEHICLES_URL = `${BASE_URL}/api/vehicles`;

function createVehicleDetailsUrl(id: TVehicle['id']) {
  return `${VEHICLES_URL}/${id}`;
}

export async function getVehicles(): Promise<TVehicles> {
  return fetch(VEHICLES_URL).then(response => response.json());
}

export async function getVehicleDetails(id: TVehicle['id']): Promise<TVehicle> {
  return fetch(createVehicleDetailsUrl(id)).then(response => response.json());
}
