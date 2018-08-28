import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MainNavigator from '../navigation/MainNavigator'

type Props = {};
export default class App extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
