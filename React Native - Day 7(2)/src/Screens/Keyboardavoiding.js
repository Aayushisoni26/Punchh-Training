import { KeyboardAvoidingView,Platform,TextInput, View, StyleSheet } from "react-native"
import React, {useState} from 'react'

export default function Keyboardavoiding(){
    const [inputValue,setInputValue] = useState("")

    return(
        <View>
    <KeyboardAvoidingView behaviour={Platform.OS === "android" ?  "height" : "padding"}>
      <TextInput style={styles.input} onChangeText = {(text) => {setInputValue(text)}}
        placeholder="Enter text here" />
    </KeyboardAvoidingView>
    </View>
    )

    
}
const styles = StyleSheet.create({
input: {
    marginTop:700
}
})