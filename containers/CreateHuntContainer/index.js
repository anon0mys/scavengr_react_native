import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles'

export default class CreateHuntContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'none',
      description: 'none',
    }
  }

  _onButtonPress = () => {
    return 'things'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create a new Scavenger Hunt</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.titleInput}
            value={this.state.title}
            onChange={this._onTitleTextChanged}
            placeholder='Name your scavenger hunt.'
          />
          <TextInput
            style={styles.descriptionInput}
            multiline={true}
            numberOfLines={6}
            value={this.state.description}
            onChange={this._onDescriptionTextChanged}
            placeholder='Describe your scavenger hunt.'
          />
        <Button
          title='Create Scavenger Hunt'
          onPress={this._onButtonPress}
        />
        </View>
      </View>
    )
  }
}
