import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactScreen from './src/Screens/ContactScreen';
import OurServices from './src/Screens/OurServices';
import navigationStrings from './src/Constants/navigationStrings';
import Keyboardavoiding from './src/Screens/Keyboardavoiding';
import { Provider } from 'react-redux';
import store from './store/store';
const Stack = createStackNavigator()
console.log(Stack);





export default function App() {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
      <StatusBar>
        backgroundColor:"yellow"
      </StatusBar>
      <Stack.Navigator initialRouteName='Home' screenOptions={
        //If we want to apply Common properties to all the screens we use screenOptions
        {headerStyle:{backgroundColor:"yellow"}}}> 

        <Stack.Screen name="Home" component={HomeScreen} initialParams={{id:20}} options={
          {headerStyle:{backgroundColor: 'red'}, title:"Aayushi's App", headerTintColor: "white",
          headerTitleStyle : {fontWeight:"bold"},
          headerTitleAlign:"center" , headerShown: false, 
          headerLeft : (props)=><MaterialCommunityIcons name="home" size ={34} color="white" onPress={()=> console.log("Home clicked")}/>,
          headerRight : (props)=><MaterialCommunityIcons name="bell-circle" size ={34} color="white" onPress={()=> console.log("Bell clicked")} /> }}/> 
        <Stack.Screen name="About" component={AboutScreen}/>
        
        <Stack.Group screenOptions={{
          headerStyle: {
            backgroundColor : "blue"
          }
        }}>
        <Stack.Screen name={navigationStrings.CONTACT} component={ContactScreen}/>
        <Stack.Screen name={navigationStrings.OURSERVICES} component={OurServices} />
        </Stack.Group>
        

      </Stack.Navigator>
     
     
    </NavigationContainer>
    </Provider>
    
  );
}

