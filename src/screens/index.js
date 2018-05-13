// import { createStackNavigator } from 'react-navigation';

// import HomeScreen from './HomeScreen'
// import DetailScreen from './DetailScreen'
// import LogoTitleScreen from './LogoTitleScreen'
// import RightButtonHeaderScreen from './RightButtonHeaderScreen'
// import ModalScreen from './ModalScreen'
// import { colors } from '../styles'

// export default createStackNavigator({
//     Home: HomeScreen,
//     Detail: DetailScreen,
//     LogoTitle: LogoTitleScreen,
//     RightButtonHeader: RightButtonHeaderScreen,
//     Modal: ModalScreen
//   },
//   {
//     initialRouteName: 'Home',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: colors.WIHERE_BACKGROUND
//       },
//       headerTintColor: colors.WIHERE_TEXT,
//       headderTitleStyle: {

//       }
//     }
//   },
// );

export { default as HomeScreen } from './HomeScreen'
export { default as DetailScreen } from './DetailScreen'
export { default as LogoTitleScreen } from './LogoTitleScreen'
export { default as RightButtonHeaderScreen } from './RightButtonHeaderScreen'
export { default as ModalScreen } from './ModalScreen'
export { default as ProblemScreen } from './ProblemScreen'