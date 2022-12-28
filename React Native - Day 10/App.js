import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Customcomp from './Customcomp';
import React, { Component, Fragment } from 'react'

const App = () => {
  let first = {uri: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg" }
  let second = {uri: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg"}
  return(
    <Fragment>
      <Customcomp url = {first} title={"First img title"}/>
      <Customcomp url = {second} title={"Second img title"}/>
    </Fragment>
  )
}

export default App;