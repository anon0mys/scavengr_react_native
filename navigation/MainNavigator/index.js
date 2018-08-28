import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../../containers/HomeContainer'
import CurrentHuntsContainer from '../../containers/CurrentHuntsContainer'
import MyHuntsContainer from '../../containers/MyHuntsContainer'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    CurrentHunts: {
      screen: CurrentHuntsContainer,
    },
    MyHunts: {
      screen: MyHuntsContainer,
    },
  },
  {
    initialRouteName: 'Home',
  }
)

export default MainNavigator;
