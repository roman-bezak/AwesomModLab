//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   Alert
// } from 'react-native';
//
//
//
// export default class AwesomeLab extends Component {
//     constructor(props) {
//     super(props);
// //    this.stateQ = {renderPlaceholderOnly: true};
//     this.state = {
//       a: '',
//       b: '',
//       n: ''
//     }
//   }
//
//   onStartButtonPress = () => {
//
//     this.setState({renderPlaceholderOnly: false});
//   };
//
//   onClaculatePress = () => {
//
//     this.setState({renderPlaceholderOnly: false});
//   };
//
//   render() {
//     // if(this.stateQ.renderPlaceholderOnly){
//     //     return (
//     //         //start scene
//     //         <View style={styles.rootContainer}>
//     //           <Text style={styles.welcome}>Welcome to Awesome Lab</Text>
//     //           <View style={styles.buttonView}><Button onPress={this.onStartButtonPress} color="#607D8B" title="Start"
//     //             accessibilityLabel="See an informative alert"/>
//     //           </View>
//     //         </View>
//     //
//     //     );
//     // }
//
//
//
//
//     return(
//
//       <View><Text style={styles.welcome}>Welcome to Awesome Lab</Text>
//
//       <TextInput
//         placeholder="Enter A"
//         placeholderTextColor="#000000"
//         style={{height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 14, margin: 15, marginBottom: 3}}
//         onChangeText={(a) => this.setState({a})}
//         value={this.state.a}
//         keyboardType = {'numeric'}
//         underlineColorAndroid = {'transparent'}
//       />
//
//       <TextInput
//         placeholder="Enter B"
//         placeholderTextColor="#000000"
//         style={{height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 14, margin: 15, marginBottom: 3}}
//         onChangeText={(b) => this.setState({b})}
//         value={this.state.b}
//         keyboardType = {'numeric'}
//         underlineColorAndroid = {'transparent'}
//       />
//
//       <TextInput
//         placeholder="Enter N"
//         placeholderTextColor="#000000"
//         style={{height: 40, borderColor: '#000000', borderWidth: 1, borderRadius: 14, margin: 15, marginBottom: 3}}
//         onChangeText={(n) => this.setState({n})}
//         value={this.state.n}
//         keyboardType = {'numeric'}
//         underlineColorAndroid = {'transparent'}
//       />
//
//         <View style={styles.buttonView}><Button onPress={this.onClaculatePress} color="#f20048" title="Calculate"
//             accessibilityLabel="See an informative alert"/>
//         </View>
// </View>
//     );
//   }
//
//
// }
//
// const styles = StyleSheet.create({
//
//   rootContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 120
//   },
//   welcome: {
//     color: '#455A64',
//     fontSize: 32,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     margin: 3
//   },
//   buttonView: {
//     marginTop:35,
//     marginLeft:80,
//     marginRight:80
//   }
// });
//
// AppRegistry.registerComponent('AwesomeLab', () => AwesomeLab);


// import React, { StyleSheet, View, Component } from 'react-native';
// import Chart from 'react-native-chart';
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     chart: {
//         width: 200,
//         height: 200,
//     },
// });
//
// const data = [
//     [0, 1],
//     [1, 3],
//     [3, 7],
//     [4, 9],
// ];
//
// class SimpleChart extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Chart
//                     style={styles.chart}
//                     data={data}
//                     verticalGridStep={5}
//                     type="line"
//                  />
//             </View>
//         );
//     }
// }



import { BarChart } from 'react-native-charts'

<BarChart
  dataSets={[
    {
      fillColor: '#46b3f7',
      data: [
        { value: 15 },
        { value: 10 },
        { value: 12 },
        { value: 11 },
      ]
    },
    {
      fillColor: '#3386b9',
      data: [
        { value: 14 },
        { value: 11 },
        { value: 14 },
        { value: 13 },
      ]
    },
  ]}
  graduation={1}
  horizontal={false}
  showGrid={true}
  barSpacing={5}
  style={{
    height: 300,
    margin: 15,
  }}/>
