import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, ScrollView, Switch } from 'react-native';

// Basic structure of class component
// class App extends Component {
// render() {
//   return (
//     <View>
//     </View>
//   )
// }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Aayushi",
      age: 21,
      locationcity : [{ 
        city:"Banswara", key:"1"},
        {city:"Jaipur", key:"2"
      }]
    }
  }

render() {
  return (
    <ScrollView>
    <View style={styles.container1}>
      <Text style = {styles.textStyle}> REACT NATIVE TRAINING DAY 1 </Text>
      
      <Button  style={styles.button} title="Click Here" onPress={()=>alert("The Click here button is clicked by Aayushi")}></Button>
      <Button  style={styles.button} title="OK" onPress={()=>alert("The OK button is clicked by Aayushi")}></Button>

      <View style={styles.container2}>
      <Text style={styles.textstylling}>Enter your Name: </Text>
      <TextInput style={styles.input} onChangeText={(text)=>this.setState({name:text})} placeholder="Enter your name"/>

      <Text style={styles.textstylling}>Enter your Age: </Text>
      <TextInput style={styles.input} onChangeText={(text)=>this.setState({age:text})} placeholder="Enter your age" keyboardType='numeric'/>
      
      <Text >My name is {this.state.name} {this.state.age}</Text>
      </View>
      <TouchableOpacity>

      { this.state.locationcity.map((item)=>{
        return(
        <View>
          <Text>{item.city}</Text>
        </View>
        )
        
      })}

      
      </TouchableOpacity>
      
      
      <FlatList
            keyExtractor={(item)=>item.key}
            data={this.state.locationcity}
            renderItem={({item})=>(
            <TouchableOpacity><Text style={styles.item}>{item.city}</Text></TouchableOpacity>
          )}
          />


         

</View>
      
      </ScrollView>
      
    
    
  );
}
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"pink",
    padding:40,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"pink",
  },
  textStyle: {
    fontSize: 40,
    color:"red",
    fontWeight:"bold",
    justifyContent: 'space-between',
    fontStyle:"oblique",
    
  },
  button: {
    backgroundColor:"black",
    padding: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    


  },
  input: {
    borderColor: "black",
    borderWidth:2,
    padding:10,
    width:150,
  },

  textstylling: {
    fontSize: 20
  },
  
  item:{
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop:30,
    padding:20
  }

});


export default App;











