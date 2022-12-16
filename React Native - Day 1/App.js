import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [name,setName] = useState("Aayushi")
  const [age,setAge] = useState(22)
  const [locationcity,setLocationCity] = useState([
    {city:"Banswara", key:"1"},
    {city:"Jaipur", key:"2"},
    
  ]);
  

  return (
    <View style={styles.container1}>


      <Text style = {styles.textStyle}> REACT NATIVE TRAINING DAY 1 </Text>
      
      <Button style={styles.button} title="Click Here" onPress={()=>alert("The Click here button is clicked by Aayushi")}></Button>
      <Button style={styles.button} title="OK" onPress={()=>alert("The OK button is clicked by Aayushi")}></Button>
      
      <View style={styles.container2}>
      <Text style={styles.textstylling}>Enter your Name: </Text>
      <TextInput style={styles.input} onChangeText={(text)=>setName(text)} placeholder="Enter your name"/>

      <Text style={styles.textstylling}>Enter your Age: </Text>
      <TextInput style={styles.input} onChangeText={(text)=>setAge(text)} placeholder="Enter your age" keyboardType='numeric'/>
      <Text style={styles.textstylling}>My name is {name} and my age is {age}</Text>
      </View>
      <TouchableOpacity>
      { locationcity.map((item)=>{
        return(
        <View>
          <Text style={styles.item}>{item.city}</Text>
        </View>
        )
      })}
      
      </TouchableOpacity>
      </View>
      
   
  );
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
