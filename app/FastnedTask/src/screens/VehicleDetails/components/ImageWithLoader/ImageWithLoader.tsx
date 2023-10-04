import React, {useCallback, useState} from 'react';
import {View, ActivityIndicator, Image, ImageProps} from 'react-native';
import styles from './ImageWithLoader.styles';
function ImageWithLoader(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleIsLoading = useCallback(() => {
    setIsLoading(loading => !loading);
  }, [setIsLoading]);

  return (
    <View>
      <Image
        {...props}
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

export default React.memo(ImageWithLoader);
