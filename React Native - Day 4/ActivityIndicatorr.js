import React, {useState} from "react"
import { StyleSheet, Text, TextInput, View, ActivityIndicator, Button, Alert } from 'react-native';
import styles from "./styles";

export default function ActivityIndicatorr(){

const [name, setName] = useState("")
  const [show,setShow] = useState(false)
  const clickMe = () => {
    setShow(true)
    setTimeout(()=>{
      setShow(false)
      Alert.alert("Welcome","Welcome to Aayushi's App")
      console.log(name)
    },3000)
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter your name here" onChangeText={(text)=>setName(text)}/>
      <ActivityIndicator size="large" color="red" animating={show}/>
      <Button title="Show" onPress={()=>clickMe()}/>
    </View>
  );
}

