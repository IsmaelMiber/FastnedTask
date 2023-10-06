import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {TVehicle, TVehicles} from '../../../types/Vehicle';

export default function useVehiclesSearch(
  vehicles: TVehicles | undefined,
  setSearchedVehicles: React.Dispatch<
    React.SetStateAction<TVehicles | undefined>
  >,
) {
  const [searchText, setSearchText] = useState('');

  const onInputTextChange = useCallback(
    (
      event: NativeSyntheticEvent<
        TextInputChangeEventData | TextInputSubmitEditingEventData
      >,
    ) => {
      var text = event.nativeEvent.text;
      text = text.trim();
      const newSearchedData =
        vehicles?.filter(({brand, model}: TVehicle) => {
          brand = brand.toLowerCase();
          model = model.toLowerCase();
          const loweredText = text.toLowerCase();
          return brand.includes(loweredText) || model.includes(loweredText);
        }) || [];
      setSearchText(text);
      setSearchedVehicles(newSearchedData);
    },
    [setSearchedVehicles, vehicles],
  );

  return {
    searchText,
    setSearchText,
    onInputTextChange,
  };
}
