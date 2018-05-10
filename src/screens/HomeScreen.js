import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title='Go to DetailScreen'
          onPress={() => this.props.navigation.navigate('Detail',{
            item: 3,
            other: "This is other param"
          })}
        />
        <Button
          title='Go to LogoTitleScreen'
          onPress={() => this.props.navigation.navigate('LogoTitle')}
        />
        <Button
          title='Go go RightButtonHeaderScreen'
          onPress={() => this.props.navigation.navigate('RightButtonHeader')}
        />
      </View>
    );
  }
}

