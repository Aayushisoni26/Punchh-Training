import { Link } from '@react-navigation/native'
import React, { Component } from 'react'
import { View,Text, Button } from 'react-native'

export class About extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Hi How are you</Text>
        <Button title='open drawer' onPress={()=> this.props.navigation.openDrawer()}/>
        <Button title='toggle drawer' onPress={()=> this.props.navigation.toggleDrawer()}/>
        <Link to = {{screen: "Home"}} style={{fontSize: 30}}> Go to Home</Link>

      </View>
    )
  }
}

export default About
