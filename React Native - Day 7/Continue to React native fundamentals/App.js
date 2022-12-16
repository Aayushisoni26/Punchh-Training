import { StatusBar } from 'expo-status-bar';
import { Button,KeyboardAvoidingView,SafeAreaView, ImageBackground, StyleSheet, Text, View, TextInput, Platform, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import TouchableHighlightt from './TouchableHighlightt';
export default function App() {
  const [inputValue,setInputValue] = useState("")
  return (
    
    <ImageBackground style={styles.container} source={require('./assets/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg')}>
      <SafeAreaView>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==="ios" ? "height" : "padding"}>
      <Text>Openyour dsfghjkljhgfghjkhgf app!</Text>
      <Button placeholder={"Enter text here"} title = "Press"/>
      <TextInput style = {styles.input} value={inputValue} onChangeText={setInputValue} placeholder = "Enter text here"/>
      </KeyboardAvoidingView>
      <TouchableHighlightt />
      </SafeAreaView>
      </ImageBackground>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  }
});
