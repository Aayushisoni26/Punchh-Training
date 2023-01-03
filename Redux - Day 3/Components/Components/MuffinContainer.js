import React from 'react'
import { connect } from 'react-redux'
import {  buyMuffins } from './index'
import { View,Text, Button} from 'react-native'
import { addmuffin } from './index'

function MuffinContainer (props) {
  return (
    <View>
      <Text>Number of Muffins - {props.numOfMuffins} </Text>
      <Button title='Buy Muffin' onPress={props.buyMuffins}/>

      <Text>Number of Added Muffins - {props.addedmuffin} </Text>
      <Button title='Add Muffin' onPress={props.addmuffin}/>
    </View>
  )
}


const mapStateToProps = state => {
  return {
    numOfMuffins: state.muffins.numOfMuffins,
    addedmuffin: state.muffins.addedmuffin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyMuffins: () => dispatch(buyMuffins()),
    addmuffin: () => dispatch(addmuffin())
  }
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(MuffinContainer)