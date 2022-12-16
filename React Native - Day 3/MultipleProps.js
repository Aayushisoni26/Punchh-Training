import React from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'

export default function MultipleProps(props){

    if(props.RollNo>=5) {
        Alert.alert("Notice:You are not in Batch 1" , "Your Batch is:Batch 1")
    }

    return(
    <View>
        <Text style={styles.text} >
           {props.NewName}
        </Text>

    </View>
)
}
const styles = StyleSheet.create({
    
    text: {
        fontSize:20,
        color:"blue"
    }
  });