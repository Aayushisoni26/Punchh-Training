import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Component } from 'react';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
 counter: 0
}
const reducer = (state = initialState, action) => {
switch(action.type)
{
  case "INCREASE_COUNTER":
    return {counter:state.counter + 1}
  case "DECREASE_COUNTER":
    return {counter: state.counter - 1}
  
}
return state;
}
const store = createStore(reducer)
class App extends Component {

render() {
  return (
    <Provider store={store}>
    <CounterApp/>
    </Provider>
  );
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


export default App;