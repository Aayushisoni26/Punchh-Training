import { Component } from 'react';
import Home from './Home';
import ButtonClicked from './ButtonClicked';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options = {{headerShown : false}}/>
        <Stack.Screen name="ButtonClicked" component={ButtonClicked} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  
}

export default App;