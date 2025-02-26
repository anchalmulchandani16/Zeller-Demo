import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/home/homeScreen';
import SplashScreen from '@screens/splash/splashScreen';
import {Colors} from '@themes/index';
import STRINGS from '@utils/strings';
import React from 'react';
import {navigationRef} from './NavigationService';
import NavigationRoutes from './navigationRoutes';
import UserDetailsScreen from '@screens/userDetails/userDetailsScreen';
const Stack = createStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={NavigationRoutes.SPLASH_SCREEN}>
        <Stack.Screen
          name={NavigationRoutes.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavigationRoutes.HOME_SCREEN}
          component={HomeScreen}
          options={{
            title: STRINGS.USER_LIST,
            headerStyle: {
              backgroundColor: Colors.COLOR_BLACK,
            },
            headerTintColor: Colors.COLOR_WHITE,
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name={NavigationRoutes.USER_DETAILS_SCREEN}
          component={UserDetailsScreen}
          options={{
            title: STRINGS.USER_DETAILS,
            headerStyle: {
              backgroundColor: Colors.COLOR_BLACK,
            },
            headerTintColor: Colors.COLOR_WHITE,
            headerTitleAlign: 'center',
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
