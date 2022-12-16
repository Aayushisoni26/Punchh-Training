import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styles from "./styles";

export default function TextstylePropss(){
    return(
        <View>
            <Text style={styles.text}>
            In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components.
            </Text>
        </View>
    )
}