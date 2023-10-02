import React, {useState} from 'react';
import {View, ActivityIndicator, Image, ImageProps} from 'react-native';
import styles from './ImageWithLoader.styles';
export default function ImageWithLoader(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(false);

  function toggleIsLoading() {
    setIsLoading(loading => !loading);
  }
  return (
    <View>
      <Image
        {...props}
        style={[props.style, isLoading ? styles.hidden : null]}
        onLoadStart={toggleIsLoading}
        onLoadEnd={toggleIsLoading}
      />
      {isLoading ? (
        <View style={[props.style, styles.center]}>
          <ActivityIndicator />
        </View>
      ) : null}
    </View>
  );
}
