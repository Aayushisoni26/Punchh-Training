import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Keyboard, TouchableOpacity, TouchableWithoutFeedback, Text, View, Image, Button, TextInput, Alert, findNodeHandle, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [rose,setRose] = useState(1);

  const images={
    pictures: {
      "0": require('./assets/GreenRose.jpg'),
      "1": require('./assets/RedRose.jpeg'),
      "2": require('./assets/YellowRose.jpeg'),
      "3": require('./assets/WhiteRose.jpeg')
    }
  }

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [gender,setGender] = useState("");

  const pressHandler = () => {
    Alert.alert("Details", "Are you sure you want to submit?",[
      {text: "Yes", onPress: () => console.log("Yes is pressed")},
      {text: "No", onPress: () => noHandler()}

    ])
  }

  const noHandler = () =>{
    setName("");
    setAge(0);
    setGender("");
  }

  const [FathersName,setFathersName] = useState("");
 
  const [number, setNumber] = useState(0)

  useEffect(()=>{
    if(number>10){
  console.warn("Warning! you can only increase upto 10")
    }
})

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Keyboard is dismissed");
    }}>
    
    <View style={styles.container}>

      <View style={styles.image}>
        <Image source={images.pictures[rose]}/>
        <Button color="#00008B" title="Change the colour" onPress={()=>setRose(Math.floor(Math.random()*4))}/>
      </View>

      <View>
        <TextInput style={styles.input} onChangeText={(text)=>setName(text)} placeholder="Enter your Name"/>
        <TextInput style={styles.input} onChangeText={(text)=>setAge(text)} placeholder="Enter your Age"/>
        <TextInput style={styles.input} onChangeText={(text)=>setGender(text)} placeholder="Enter your Gender"/>
        <Button color="#00008B" title="Submit" onPress={()=>pressHandler()}/>
        <Text>{name} {age} {gender}</Text>
      </View>

      <View>
        <TextInput style={styles.input} placeholder = "Enter your city"/>
      </View>

      <View>
        <TextInput style={styles.input} onChangeText={(text) => setFathersName(text)} placeholder="Enter your Father's Name"/>
        <TouchableOpacity onPress={()=> Alert.alert("Your Details","Your name is " + name.toString())}>
          <View style={styles.button}>
            <Text>Press</Text>
          </View>
      </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.label}>{number}</Text>
        <Button title = "Update" onPress={()=>setNumber(number+1)}/>
      </View>

    </View>
    
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "contain",
    flex: 1,
  },
  input: {
    backgroundColor:"pink",
    padding:10,
    marginTop:20,
    width:350,
  },
  button: {
    backgroundColor: "yellow",
    padding:10,
    borderWidth: 3,
    borderColor:"#00008B",
    borderRadius:20,
    marginTop:30,
    justifyContent:"center",
    alignItems:"center",
   
  },
  label: {
    fontSize: 20,
    color: "red",
    padding: 20
  }
  
});
