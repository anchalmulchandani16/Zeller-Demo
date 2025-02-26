import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {IMAGES} from '@assets/index';
import Styles from './styles';
import NavigationRoutes from '@navigations/navigationRoutes';
const SplashScreen = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace(NavigationRoutes.HOME_SCREEN);
    }, 3000);
  }, []);

  return (
    <View style={Styles.container}>
      <Image
        testID="splash-logo"
        source={IMAGES.LOGO}
        style={Styles.image}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default SplashScreen;
