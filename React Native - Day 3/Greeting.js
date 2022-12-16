import React, { useState } from 'react'
import {View, Text, TextInput, Button,StyleSheet} from 'react-native'




export default function Greeting() {
    const [name, setName] =useState("")


    return (
        <View>
            <TextInput style= {styles.input} placeholder='Name' onChangeText={(text)=>setName(text)} />
            <Button title="Greet" onPress={()=>console.log(name)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'pink',
      padding: 20,
      marginTop: 40
    },
    input: {
      backgroundColor: "#FAFA33",
      padding:20
    }
  });