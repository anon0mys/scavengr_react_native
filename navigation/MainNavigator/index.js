import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../../containers/HomeContainer'

export default createStackNavigator(
  {
    Home: {
      screen: HomeContainer
    },
  },
  {
    initialRouteName: 'Home',
  }
)
