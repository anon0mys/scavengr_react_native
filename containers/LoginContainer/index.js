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

  componentDidUpdate(prevProps, prevState) {
    if (this.username != null) {
      this.props.navigation.navigate('Home')
    }
  }

  _onButtonPress = () => {
    //make api call to backend
    fetch('https://scavengr-django.herokuapp.com/api/v1/users/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: `{ "username": ${this.state.username}, "email": ${this.state.email}, "password": ${this.state.password} }`
    })
    .then()
    //save info to store
  }

  _onChangeUsername = (text) => {
    this.setState({username: text});
  }

  _onChangePassword = (text) => {
    this.setState({password: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.siteTitle}>Scavengr</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.usernameInput}
            onChange={text => this._onChangeUsername(text)}
            placeholder='Username'
          />
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            onChange={text => this._onChangePassword(text)}
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
