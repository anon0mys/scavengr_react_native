import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeContainer from '../../containers/HomeContainer'
import CurrentHuntsContainer from '../../containers/CurrentHuntsContainer'
import MyHuntsContainer from '../../containers/MyHuntsContainer'
import CreateHuntContainer from '../../containers/CreateHuntContainer'
import LoginContainer from '../../containers/LoginContainer'

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Login: {
      screen: LoginContainer,
    },
    CurrentHunts: {
      screen: CurrentHuntsContainer,
    },
    MyHunts: {
      screen: MyHuntsContainer,
    },
    CreateHunt: {
      screen: CreateHuntContainer,
    },
  },
  {
    initialRouteName: 'Login',
  }
)

export default MainNavigator;
