import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'
export default class Customcomp extends Component {
    constructor(props){
        super(props)
        this.state = {isHidden : false}
    }

    showHideText = () => {
        this.setState({isHidden : !this.state.isHidden})
    }
  render() {
    
    return (
      <View>
        {!this.state.isHidden && <Text>{this.props.title}</Text> }
        <Image source = {this.props.url} style = {{width:200, height : 200}}></Image>
        <Button title="Click Me" onPress={this.showHideText}/>
      </View>
    )
  }
}
