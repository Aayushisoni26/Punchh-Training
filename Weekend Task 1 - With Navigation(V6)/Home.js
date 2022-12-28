import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { View} from 'react-native';
import Selectorswitch from './Selectorswitch';
import Flatlistt from './Flatlistt';

class Home extends Component {
  render() {
    return(
      <View>
        <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
            
        <Selectorswitch navigation = {this.props.navigation}/>

        <Flatlistt navigation = {this.props.navigation}/>
      </View>
    )
  }
  
}

export default Home;