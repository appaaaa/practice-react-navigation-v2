import { createStackNavigator } from 'react-navigation';
import { HomeScreen, DetailScreen, LogoTitleScreen, RightButtonHeaderScreen } from '../screens'
import { colors } from '../styles'

export default createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
    LogoTitle: LogoTitleScreen,
    RightButtonHeader: RightButtonHeaderScreen
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