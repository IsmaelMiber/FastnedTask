import {useEffect, useState} from 'react';
import {ChargingPercentage} from '../../../types/Charging';
import {TVehicle} from '../../../types/Vehicle';

const CHARGING_PERCENTAGES: ChargingPercentage[] = [];

for (let i = 0; i <= 100; ++i) {
  const next = i + 1;
  CHARGING_PERCENTAGES.push({
    percentage: i,
    timeout: next * 25,
    nextIndex: next > 100 ? undefined : next,
  });
}

export function getEnergyProgress(
  percentage: ChargingPercentage['percentage'],
  kWh: TVehicle['version'],
) {
  if (parseFloat(kWh)) {
    const kWhPerPercentage = parseFloat(kWh.replace(',', '.')) / 100;
    return (percentage * kWhPerPercentage).toFixed(1);
  }
  return kWh;
}

function useCharging(vehicle: TVehicle | undefined) {
  const {version = '', chargeSpeedInKw = ''} = vehicle || {};
  const [currentPercentage, setCurrentPercentage] = useState(
    CHARGING_PERCENTAGES[0],
  );
  const {percentage} = currentPercentage;

  useEffect(() => {
    if (currentPercentage.percentage === 100) {
      return;
    }
    const timeoutId = setTimeout(() => {
      const {nextIndex} = currentPercentage;
      if (nextIndex) {
        setCurrentPercentage(CHARGING_PERCENTAGES[nextIndex]);
      }
    }, currentPercentage.timeout);

    return () => clearTimeout(timeoutId);
  }, [currentPercentage, setCurrentPercentage]);

  const progress = percentage / 100;

  return {
    version,
    chargeSpeedInKw,
    progress,
    energyProgress: getEnergyProgress(percentage, version),
    percentage,
    stopAnimation: percentage !== 100,
  };
}

export default useCharging;
