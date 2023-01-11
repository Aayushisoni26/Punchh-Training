import { Link } from '@react-navigation/native'
import React, { Component } from 'react'
import { View,Text } from 'react-native'

export class Contact extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>Hi How are you</Text>
        <Link to = {{screen: "About"}} style={{fontSize: 30}}> Go to About</Link>
      </View>
    )
  }
}

export default Contact