import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class Tab1 extends React.Component {
  static navigationOptions = {
    title: 'Tab1',
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tab1 Screen</Text>
      </View>
    );
  }
}

