import {View, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
