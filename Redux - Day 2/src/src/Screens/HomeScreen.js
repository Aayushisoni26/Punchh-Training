import { View, Text, Button, StatusBar, KeyboardAvoidingView, Platform} from 'react-native'
import React, {useState} from 'react'
import { Link } from '@react-navigation/native'
import NavigationContainer from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {connect} from "react-redux"


const mapstatetoprops = (state) => ({user: state.user});

const mapdispatchtoprops =(dispatch) => ({
  adduser: (username) => 
  dispatch({
    type: ActionTypes.ADD_USER,
    payload: {
      username,
    },
  }),
});

const connectComponent = connect(mapstatetoprops, mapdispatchtoprops);





//const HomeScreen = ({route, navigation}) => {
  const HomeScreen = (props) => {
    const route = useRoute()
    const navigation = useNavigation()
console.log('Route...',route)
console.log('Navigation...',navigation)
  const [inputValue,setInputValue] = useState("")
  return (
    <View>
      <StatusBar backgroundColor={"pink"} barStyle = "dark-content" hidden = {false} translucent = {false}/>
      <Text style={{fontSize: 24}}>HomeScreen</Text>
      <Link to = {{screen : 'About' }} style={{fontSize:20}}> Go to About </Link>

      

      <Link to = {{screen : 'Our Services' }} style={{fontSize:20}}> Go to Our Services </Link>
      <Button title = "Go to Contact" onPress={()=>navigation.navigate(navigationStrings.CONTACT)}/>
      <Text>WElcome {props.user.username}</Text>
      <TextInput placeholder='what should we call you'></TextInput>
      <Button title="ENTER"></Button>
      
      
    </View>
  )
}

export default connectComponent(HomeScreen)