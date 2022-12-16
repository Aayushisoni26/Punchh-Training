import react from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function CustomButton(props){
    return(
        <TouchableOpacity onPress={()=>props.click()}>


        <View style={styles.button}>
            <Text style={styles.text}>{props.course}</Text>
        </View>

        </TouchableOpacity>
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
        color:"blue",
        fontWeight:"bold"
    },
    button : {
        backgroundColor:"yellow",
        padding:15,
        alignItems:"center",
        width:"50%",
        alignSelf:"center",
        borderWidth:5,
        borderColor:"black"

    }
  });