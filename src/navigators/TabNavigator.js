
import { createBottomTabNavigator } from 'react-navigation';
import { Tab1Screen, Tab2Screen } from '../screens'

export default createBottomTabNavigator(
  {
    Tab1: Tab1Screen,
    Tab2: Tab2Screen,
  },
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Tab1') {
  //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //       } else if (routeName === 'Tab2') {
  //         iconName = `ios-options${focused ? '' : '-outline'}`;
  //       }

  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);