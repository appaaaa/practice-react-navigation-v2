import React from 'react';
import { Button, View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.other : "detail screen"
    }
  }

  render() {
    const { navigation } = this.props
    const id = navigation.getParam('item', 'no item')
    const other = navigation.getParam('other', 'nothing')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Text>{`id: ${id}`}</Text>
        <Text>{`other: ${other}`}</Text>
        <Button 
          title="Go to detail again"
          onPress={() => this.props.navigation.push('Detail')}
        />
        <Button
          title="Navigate Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button 
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({other: 'Updated!'})}
        />
      </View>
    );
  }
}

