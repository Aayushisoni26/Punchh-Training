import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList, ToastAndroid, Button } from 'react-native';
import styles from "./styles";

export default function ToastAndroidd(){

    const showToast = () => {
        ToastAndroid.show("Welcome to Aayushi's App",ToastAndroid.SHORT)
    }

    const showToastWithGravity = () =>{
        ToastAndroid.showWithGravity(
            "Welcome to Aayushi's App",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    };

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Welcome to Aayushi's App",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            30,
            50
        )
    }

    return(
        <View>
            <Button title="show toast" onPress={()=>showToast()} />
            <Button title="show Toast with Gravity" onPress={()=>showToastWithGravity()} />
            <Button title="show toast with gravity and offset" onPress={()=>showToastWithGravityAndOffset()} />
        </View>
    )
}