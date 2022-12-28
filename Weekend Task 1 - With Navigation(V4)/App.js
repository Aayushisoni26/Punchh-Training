import { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from './Home';
import ButtonClicked from './ButtonClicked';

const RootStack = createStackNavigator(
  {
    Home: {
      screen:Home,
      navigationOptions:{
        headerShown:false,
      }
    },
    ButtonClicked: {
      screen:ButtonClicked,
      navigationOptions:{
        headerShown:false,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
  
}

export default App;