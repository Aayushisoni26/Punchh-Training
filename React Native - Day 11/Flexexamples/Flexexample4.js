import React, { Component } from 'react'
import { View, StyleSheet,Text } from 'react-native';

export default class Flexexample4 extends Component {
  render() {
    return (
        <View style={[styles.container,{flexDirection: "row-reverse"}]}>
            
        <View style={{ flex: 2, backgroundColor: "pink", margin:4 }}/>
        <View style={{ flex: 1, backgroundColor: "blue", margin:4 }} />
        <View style={{ flex: 3, backgroundColor: "yellow", margin:4 }} />
        </View>
            
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      height: 100,
      
    },
  });
