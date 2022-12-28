import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Flatlist } from 'react-native';
import Style from './Style';
import Selectorswitch from './Selectorswitch';
import Flatlistt from './Flatlistt';

class Home extends Component {
  render() {
    return(
      <View>
        <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
            
        <Selectorswitch/>

        <Flatlistt/>
      </View>
    )
  }
  
}

export default Home;