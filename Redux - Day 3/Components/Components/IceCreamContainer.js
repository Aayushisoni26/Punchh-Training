import React from 'react'
import { connect } from 'react-redux'
import { addIceCream } from './index'
import { buyIceCream } from './index'
import { View,Text, Button} from 'react-native'

function IceCreamContainer (props) {
  
  return (
    <View>
      <Text>Number of ice creams - {props.numOfIceCreams} </Text>
      <Button title='Buy Ice Cream' onPress={props.buyIceCream}/>

      <Text>Number of Added Ice Creams - {props.addedIceCream} </Text>
      <Button title='Add Ice Cream' onPress={props.addIceCream}/>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
    addedIceCream: state.iceCream.addedIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    addIceCream: () => dispatch(addIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)