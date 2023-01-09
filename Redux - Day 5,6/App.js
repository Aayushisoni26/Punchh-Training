import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import store from './Store/store';
import Homescreen from './Screens/Homescreen';
import Showemployeedetail from './Screens/Showemployeedetail';
import { Provider } from 'react-redux';
import AppNavigator from "./Screens/Navigation"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



class App extends Component{
  render() {
    return (

      <Provider store ={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Homescreen" component ={Homescreen} options = {{headerShown : false}}/>
            <Stack.Screen name ="Showemployeedetail" component = {Showemployeedetail} options = {{headerShown : false}} />
          </Stack.Navigator>

        </NavigationContainer>
       
      
     
      </Provider>
    )
  }
}

export default App;