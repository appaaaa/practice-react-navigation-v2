import { createStackNavigator } from 'react-navigation';
import { HomeScreen, DetailScreen, LogoTitleScreen, RightButtonHeaderScreen, ProblemScreen } from '../screens'
import { colors } from '../styles'
import TabNavigator from './TabNavigator'

export default createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
    LogoTitle: LogoTitleScreen,
    RightButtonHeader: RightButtonHeaderScreen,
    Problem: ProblemScreen,
    Tab: TabNavigator
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.WIHERE_BACKGROUND
      },
      headerTintColor: colors.WIHERE_TEXT,
      headderTitleStyle: {

      }
    }
  },
);