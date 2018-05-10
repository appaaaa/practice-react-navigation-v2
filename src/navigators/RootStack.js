import { createStackNavigator } from 'react-navigation';

import MainStack from './MainStack'
import { ModalScreen } from '../screens'

export default createStackNavigator({
    Main: MainStack,
    Modal: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);