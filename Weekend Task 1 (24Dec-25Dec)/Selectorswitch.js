import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import SwitchSelector from "react-native-switch-selector";
import Style from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SelectorSwitch = [
    { label: "LIST", value: "list" },
    { label: "MAP", value: "map" },
  ];
  
  class Selectorswitch extends Component {
    render() {
      return(
        <View>
        <View style= {Style.container}>
          <SwitchSelector  
          options={SelectorSwitch}
          initial={0}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
          textColor = "#5272B4"
          selectedColor = "white"
          buttonColor = "#1B5AA5"
          borderColor = "#3F72B0"
          fontSize = {13}
          borderRadius = {8}
          height = {30}
          valuePadding = {1.5}
          
          
          hasPadding
          />
          <View style={Style.iconstyle}>
            <TouchableOpacity>
          <MaterialCommunityIcons name="magnify" size={30} color="#1757A2" />
          </TouchableOpacity>
          </View>
          
        </View>
        <View style={Style.hairline} />
          
          
        </View>
      )
    }
    
  }

  export default Selectorswitch;
  
