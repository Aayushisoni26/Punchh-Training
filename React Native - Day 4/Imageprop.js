import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList,Image } from 'react-native';
import styles from "./styles";

export default function Imageprop(){
    return (
        <View>
            <Image 
            source={require('./assets/5.png')}
            style={{height:300,width:300, borderWidth:20,borderColor:"orange",borderRadius:50,opacity:0.8}}
            resizeMode="cover"
            />

        </View>
    )
}