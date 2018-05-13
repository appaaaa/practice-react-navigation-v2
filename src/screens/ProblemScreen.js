import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import DetailScreen from './DetailScreen'


export default class ProblemScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Problem Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <DetailScreen />
      </View>
    );
  }
}