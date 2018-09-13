import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles'

type Props = {};
export default class CurrentHuntsContainer extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Current Hunts</Text>
      </View>
    )
  }
}
