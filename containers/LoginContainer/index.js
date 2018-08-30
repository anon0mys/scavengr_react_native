import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles'

export default class LoginContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    }
  }

  _onButtonPress = () => {
    return 'things'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.siteTitle}>Scavengr</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.usernameInput}
            value={this.state.username}
            onChange={this._onUsernameTextChanged}
            placeholder='Username'
          />
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            value={this.state.password}
            onChange={this._onPasswordTextChanged}
            placeholder='Password'
          />
          <Button
            title='Login'
            onPress={this._onButtonPress}
          />
        </View>
      </View>
    )
  }
}
