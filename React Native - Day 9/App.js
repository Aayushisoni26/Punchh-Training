import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Dimension from './Dimension';
import Images from './Images';

class App extends Component {
  render(){
    return(
      <ScrollView>
      <View>
<View >

      <Dimension/>
      </View>
      <View>
      <Images/>
      </View>
    </View>
    </ScrollView>
    )
  }
}



export default App;
