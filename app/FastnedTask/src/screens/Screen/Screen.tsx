import React, {PropsWithChildren} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Screen.styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  isLoading?: boolean;
  isError?: boolean;
  error?: Error | null;
  withBackBtn?: boolean;
};

function BackBtn({withBackBtn}: Partial<Props>) {
  const navigation = useNavigation();

  return withBackBtn ? (
    <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
      <Image
        source={require('../../assets/icons/left-arrow.png')}
        style={styles.backBtnIcon}
        resizeMode="contain"
      />
      <Text style={styles.backBtnText}>Back</Text>
    </TouchableOpacity>
  ) : null;
}

export default function Screen({
  isLoading = false,
  isError = false,
  error = null,
  children,
  withBackBtn = true,
}: PropsWithChildren<Props>) {
  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (isError && error) {
      return (
        <View style={styles.center}>
          <Text>{error.message}</Text>;
        </View>
      );
    }
    return children;
  }

  return (
    <View style={[styles.container]}>
      <BackBtn withBackBtn={withBackBtn} />
      {renderContent()}
    </View>
  );
}
