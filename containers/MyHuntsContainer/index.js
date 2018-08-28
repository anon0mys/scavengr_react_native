import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles'

type Props = {};
export default class MyHuntsContainer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Hunts</Text>
      </View>
    )
  }
}
