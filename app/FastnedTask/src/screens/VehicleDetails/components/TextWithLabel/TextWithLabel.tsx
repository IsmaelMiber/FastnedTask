import React from 'react';
import {View, Text} from 'react-native';
import styles from './TextWithLabel.styles';

type Props = {
  label?: string;
  text?: string;
};

function TextWithLabel({label, text}: Props) {
  if (!label || !text) {
    return null;
  }
  return (
    <View style={styles.textWithLabelContainer}>
      <Text style={styles.label}>{label} </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default TextWithLabel;
