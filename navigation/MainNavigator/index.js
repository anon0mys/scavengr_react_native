import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../../containers/HomeContainer'
import CurrentHuntsContainer from '../../containers/CurrentHuntsContainer'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    CurrentHunts: {
      screen: CurrentHuntsContainer,
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default MainNavigator;
