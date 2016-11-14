
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



export default class AwesomeLab extends Component {
    constructor(props) {
    super(props);
//    this.stateQ = {renderPlaceholderOnly: true};
    this.state = {
      a: '',
      b: '',
      n: ''
    }
  }

  onButtonPress = () => {

    this.setState({renderPlaceholderOnly: false});
  };

  render() {
    // if(this.stateQ.renderPlaceholderOnly){
    //     return (
    //         //start scene
    //         <View style={styles.rootContainer}>
    //           <Text style={styles.welcome}>Welcome to Awesome Lab</Text>
    //           <View style={styles.buttonView}><Button onPress={this.onButtonPress} color="#607D8B" title="Start"
    //             accessibilityLabel="See an informative alert"/>
    //           </View>
    //         </View>
    //
    //     );
    // }

    return(

      <View><Text style={styles.welcome}>Welcome to Awesome Lab</Text>

      <Text>A: </Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(a) => this.setState({a})}
        value={this.state.a}
        keyboardType = {'numeric'}
      />
</View>
    );
  }


}

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 120
  },
  welcome: {
    color: '#455A64',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 3
  },
  buttonView: {
    marginTop:35,
    marginLeft:80,
    marginRight:80
  }
});

AppRegistry.registerComponent('AwesomeLab', () => AwesomeLab);
