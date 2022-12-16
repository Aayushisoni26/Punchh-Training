import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ActivityIndicator, Button, Alert, ScrollView } from 'react-native';
import React, {useState} from 'react'
import styles from './styles';
import ActivityIndicatorr from './ActivityIndicatorr';
import SectionListt from './SectionListt';
import CustomSectionList from './CustomSectionList';
import PressableComponentt from './PressableComponentt';
import RefreshControll from './RefreshControll';
import TextstylePropss from './TextstylePropss';
import ViewStylePropss from './ViewStylePropss';
import Imageprop from './Imageprop';
import Touchablenativefeedback from './Touchablenativefeedback';
import ToastAndroidd from './ToastAndroidd';

export default function App() {

  const DATA = [
    {
        title:"Custom Section List - Main Items",
        data: ["Momos", "Cold Coffee"]
    },
    {
        title:"Additionals",
        data:["French Fries", "Zingy Parcel", "Salad"]
    },
    {
        title:"Beverages",
        data:["Coca Cola", "Fanta", "Sprite"]
    },
    {
        title:"Desserts",
        data:["Cheese Cake","Ice Creams"]
    }
]

  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
      <ActivityIndicatorr/>
    </View>
    <View>
      <SectionListt/>
    </View>
    <View>
      <CustomSectionList data={DATA}/>
    </View>
    <View>
      <PressableComponentt/>
    </View>
    <View>
      <RefreshControll/>
    </View>
    <View>
      <TextstylePropss/>
    </View>
    <View>
      <ViewStylePropss/>
    </View>
    <View>
      <Imageprop/>
    </View>
    <View>
      <Touchablenativefeedback/>
    </View>
    <View>
      <ToastAndroidd/>
    </View>
    </ScrollView>
    
    </View>
    
    
  );
}

