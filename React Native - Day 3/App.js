import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TextInput, Button, Switch, ScrollView } from 'react-native';
import React, {useState} from "react";
import Greeting from './Greeting';
import Display from './Display';
import MultipleProps from './MultipleProps';
import CustomSwitch from './CustomSwitch';
import CustomButton from './CustomButton';

export default function App() {
const [open,setOpen] = useState(false)
const [name, setName] = useState()
const [age, setAge] = useState(0)

const [NewName, setNewName] = useState("")
const [RollNo, setRollNo] = useState(0)

const [location,setLocation] = useState(false)
const [mic,setMic] = useState(false)
const [storage,setStorage] = useState(false)

const toggleLocation = () => {
  setLocation(previousState=>!previousState)
}

const toggleMic = () => {
  setMic(previousState=>!previousState)
}

const toggleStorage = () => {
  setStorage(previousState=>!previousState)
}

const [course, setCourse] =useState("")

const clickMe = () => {
  console.log(course)
}

  return (
    
    <View style={styles.container}>
<ScrollView>
      <View>
      <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>setName(text)}/>
      <TextInput style={styles.input} placeholder="Age" onChangeText={(text)=>setAge(text)}/>
      <Button title="Click" onPress={()=>setOpen(true)} />
      <Modal visible = {open}>
        <Text>Your name is {name} and you are {age} years old.</Text>
        <Button title="Close" onPress={()=>setOpen(false)} />
      </Modal>
      </View>

      <View>
        <Greeting/>
      </View>

      <View>
            <TextInput style = {styles.input} placeholder = "Name" onChangeText={(text)=>setName(text)}/>
            <Button title="Show"/>
            <Display name = {name}/>
      </View>

        <View>
          <TextInput placeholder='Name' onChangeText={(text)=>setNewName(text)} style={styles.input}/>
          <TextInput placeholder='Roll Number' onChangeText={(text)=>setRollNo(text)} style={styles.input}/>
          <MultipleProps NewName={NewName} RolLNo={RollNo}/>
        </View>

        

        <View style={styles.container}>
          <Text style={styles.text}></Text>
        </View>

        <View style={styles.swtch}>
          <Text style={styles.text}> Location is {location ? "On" : "Off"} </Text>
          <CustomSwitch isEnabled={location} toggleSwitch={setLocation}/>

          <Text style={styles.text}> Mic is {mic ? "On" : "Off"} </Text>
          <CustomSwitch isEnabled={mic} toggleSwitch={setMic}/>

          <Text style={styles.text}> storage is {storage ? "On" : "Off"} </Text>
          <CustomSwitch isEnabled={storage} toggleSwitch={setStorage}/>
          
        </View>

        <View>
          <TextInput style= {styles.input} placeholder="Course" onChangeText={(text)=>setCourse}/>
          <CustomButton course="Enter here" click={clickMe}/>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 20,
    marginTop: 40,
  },
  input: {
    backgroundColor: "#FAFA33",
    marginTop:20,
    padding:20
  },
  text: {
    fontSize:20,
    color:"blue"
},
swtch: {
  alignItems : "flex-start"
}
});
