import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
export default class Sidebar extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <DrawerContentScrollView {...this.props}>
       <Image source={{uri:'https://cdn.pixabay.com/photo/2022/10/20/11/26/landscape-7534634_1280.jpg'}}
                style={{height:100,width:100,borderRadius:40,marginBottom:10}}/>
        
        <Text>Hiiii</Text>
        <DrawerItemList {...this.props}/>
      </DrawerContentScrollView>
    )
  }
}
