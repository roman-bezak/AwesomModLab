
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class AwesomeLab extends Component {
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View style={styles.topTitle}>
        <Text style={styles.welcome}>Welcome to Awesome Lab</Text>
        <Text style={styles.instructions}>Lor</Text>
        <View style={styles.buttonView}><Button onPress={onButtonPress} title="Start"
          accessibilityLabel="See an informative alert"
        /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topTitle: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 3
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    margin: 15
  },
  buttonView: {
    marginTop:15,
    marginLeft:80,
    marginRight:80
  }
});

AppRegistry.registerComponent('AwesomeLab', () => AwesomeLab);
