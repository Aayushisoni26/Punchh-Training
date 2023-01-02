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

function Headerbutton() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

  