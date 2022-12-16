import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Display(props){
return(
    <View style={styles.container}>
        <Text style={styles.text} >
            Hello {props.name}, welcome to our App!!
        </Text>

    </View>
)
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'pink',
      padding: 20,
      marginTop: 40
    },
    
    text: {
        fontSize:20,
        color:"blue"
    }
  });