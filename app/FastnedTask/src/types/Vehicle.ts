type TExternalParams = {
  typecode: string;
  ref_consumption: string;
  usable_battery_wh: string;
  fast_chargers: string;
};

export type TVehicle = {
  id: number;
  brand: string;
  model: string;
  version: string;
  category: string;
  connectorType: string;
  recommendedCharger: string;
  chargeSpeedInKw: number;
  helpUrl: string;
  imageUrl: string;
  autochargeCapable: boolean;
  externalParameters: TExternalParams;
  chargeCurve: string;
};

export type TVehicles = TVehicle[];
