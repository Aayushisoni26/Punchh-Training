import { View, Text, Button, StatusBar, KeyboardAvoidingView, Platform} from 'react-native'
import React, {useState} from 'react'
import { Link } from '@react-navigation/native'
import NavigationContainer from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen  ({navigation}) {

  const [inputValue,setInputValue] = useState("")
  return (
    <View>
      <StatusBar backgroundColor={"pink"} barStyle = "dark-content" hidden = {false} translucent = {false}/>
      <Text style={{fontSize: 24}}>HomeScreen</Text>
      <Link to = {{screen : 'About' }} style={{fontSize:20}}> Go to About </Link>

      

      <Link to = {{screen : 'Our Services' }} style={{fontSize:20}}> Go to Our Services </Link>
      <Button title = "Go to Contact" onPress={()=>navigation.navigate(navigationStrings.CONTACT)}/>
      
      
    </View>
  )
}

export default HomeScreen