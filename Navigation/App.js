import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import About from './Screens/About';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Sidebar from './Screens/Sidebar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from './Screens/Contact';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Tab1 = createMaterialBottomTabNavigator();

const Tab2 = createMaterialTopTabNavigator();

class Root extends Component{
  render(){
    return (
    

      //custom Drawer
      <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}
      >
            
              <Drawer.Screen name="BottomTab" component={Bottomtab}  options={{headerTitle: "Dashboard", drawerLabel: "Its home", drawerIcon: props => <MaterialCommunityIcons size={30} color="white" style={{padding:2}} name="home" />}} />
              <Drawer.Screen name="About" component={About} options={{headerTitle: "Dashboard", drawerLabel: "Its About"}}/>
      </Drawer.Navigator>
      )
  }
}

class Bottomtab extends Component{
  render(){

    return(
      <Tab.Navigator activeColor='red' inactiveColor='blue' barStyle={{ backgroundColor: '#694fad' }} screenOptions={{
        headerStyle: {backgroundColor: "yellow"}, tabBarStyle: {
          backgroundColor: "pink"
        }, 
      }}>
        <Tab.Screen name="BottomTab2" component={Bottomtab2} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="home"  size={24}/>, tabBarBadge: 10
        }}/>
        <Tab.Screen name="About" component={About} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="information-variant"  size={24}/>
        }}/>
        <Tab.Screen name="Contact" component={Contact} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="account-box"  size={24}/>
        }}/>
      </Tab.Navigator>
    )
  }
}

class Toptab extends Component{
  render(){
    return(
      <Tab2.Navigator>
      <Tab2.Screen name="Bottomtab" component={Home} />
      <Tab2.Screen name="Contact" component={Contact} />
    </Tab2.Navigator>
    )
  }
}





class Bottomtab2 extends Component{
  render(){

    return(
      <Tab1.Navigator activeColor='red' inactiveColor='blue' barStyle={{ backgroundColor: '#694fad' }} screenOptions={{
        headerStyle: {backgroundColor: "yellow"}, tabBarStyle: {
          backgroundColor: "pink"
        }, 
      }}>
        <Tab1.Screen name="Toptab" component={Toptab} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="home"  size={24}/>, tabBarBadge: 10
        }}/>
        <Tab1.Screen name="About" component={About} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="information-variant"  size={24}/>
        }}/>
        <Tab1.Screen name="Contact" component={Contact} options={{
          title: "overview", tabBarLabel: "its home", tabBarShowLabel: true, tabBarLabelPosition: "beside-icon", tabBarLabelStyle: "bold",
          tabBarIcon: () => <MaterialCommunityIcons name="account-box"  size={24}/>
        }}/>
      </Tab1.Navigator>
    )
  }
}



class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={Root}  options={
            {headerStyle:{backgroundColor:"pink"}, title:"Aayushi's App", headerTintColor:"white", headerTitleStyle:{fontWeight:"bold"}, headerTitleAlign: "center", headerShown:true}
          }/>
        </Stack.Navigator>

      </NavigationContainer>
      
    )
  }
}







  // <Drawer.Navigator initialRouteName='About' screenOptions={{
      //   headerStyle: {backgroundColor:"pink"},
      //   drawerActiveBackgroundColor: "red",
      //   drawerActiveTintColor: "yellow",
        
      // }}>
      //         <Drawer.Screen name="Home" component={Home} options={{headerTitle: "Dashboard", drawerLabel: "Its home", drawerIcon: props => <MaterialCommunityIcons size={30} color="white" style={{padding:2}} name="home" />}} />
      //         <Drawer.Screen name="About" component={About} options={{headerTitle: "Dashboard", drawerLabel: "Its About"}}/>
      // </Drawer.Navigator>

export default App