import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Component } from 'react';
import { connect } from 'react-redux';
class CounterApp extends Component {


render() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", width:200, justifyContent: "space-around"}}>
        <TouchableOpacity onPress={()=> this.props.increaseCounter()}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=> this.props.decreaseCounter()}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
}

function mapstatetoprops(state){
    return {
        counter:state.counter
    }
}

function mapdispatchtoprops(dispatch) {
  return {
    increaseCounter: () => dispatch({type:"INCREASE_COUNTER"}),
    decreaseCounter: () => dispatch({type:"DECREASE_COUNTER"}),
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default connect(mapstatetoprops, mapdispatchtoprops)(CounterApp);