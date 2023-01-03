import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './index'
import { addCake } from './index'
import { View,Text, Button} from 'react-native'

function CakeContainer (props) {
  return (
    <View>
      <Text>Number of cakes - {props.numOfCakes} </Text>
      <Button title='Buy cake' onPress={props.buyCake}/>
      <Text>Number of Added cakes {props.addedCakes}</Text>
      <Button title='Add cake'  onPress={props.addCake}/>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
    addedCakes: state.cake.addedCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake:() =>dispatch(addCake())
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)