import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

import LoginContainer from '../LoginContainer'
import { styles } from './styles'

type Props = {};
export default class HomeContainer extends Component<Props> {
  render() {
    if (1 == 1) {
      return (
        <LoginContainer />
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Home Container</Text>
          <Button
            title="My Scavenger Hunts"
            onPress={() =>
              this.props.navigation.navigate('MyHunts')
            }
          />
          <Button
            title="Create a Scavenger Hunt"
            onPress={() =>
              this.props.navigation.navigate('CreateHunt')
            }
          />
          <Button
            title="Current Scavenger Hunts"
            onPress={() =>
              this.props.navigation.navigate('CurrentHunts')
            }
          />
        </View>
      );
    }
  }
}
