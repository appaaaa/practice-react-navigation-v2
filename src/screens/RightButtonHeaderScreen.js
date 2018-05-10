import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';

export default class RightButtonHeaderScreen extends React.Component {
  static navigationOptions = {
    headerBackTitle: null,
    title: 'RightButtonHeader',
    headerRight: (
      <Button
        title='right'
        onPress={() => Alert.alert("", 'Right Button Pressed!')}
      />
    ),
    
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>RightButtonHeader Screen</Text>
        <Button
          title='No headerBackTitle Screen'
          onPress={() => this.props.navigation.push('RightButtonHeader')}
        />
      </View>
    );
  }
}

