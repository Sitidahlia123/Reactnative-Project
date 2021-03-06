/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Judul from'./components/judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <View style={styles.container}>
      <Judul judul="Login"/>
      <Judul judul="biodata"/>
      <Judul judul="Saya"/>
      <Image 
        style={{width: 200, height: 250}}
        source={require('./foto.jpg')} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Nama : Siti Dahlia
        </Text>
        <Text style={styles.instructions}>
          Kelas : XI RPL 1
        </Text>
        <Text style={styles.instructions}>
          No Absen : 36
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
    fontSize: 20,

  },
});
