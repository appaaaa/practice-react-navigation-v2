import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class Tab2 extends React.Component {
  static navigationOptions = {
    title: 'Tab2',
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tab2 Screen</Text>
      </View>
    );
  }
}

