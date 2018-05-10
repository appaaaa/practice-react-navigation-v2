import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Logo } from '../components'

export default class LogoTitleScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo/>
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LogoTitle Screen</Text>
      </View>
    );
  }
}

