import {View, Text} from 'react-native';
import React from 'react';
import styles from './EmptyList.styles';

type Props = {
  searchText?: string;
};

export default function EmptyList({searchText = ''}: Props) {
  return (
    <View testID="not-exist" style={styles.container}>
      <Text style={styles.emptyText}>"{searchText}" Car Not Found</Text>
    </View>
  );
}
