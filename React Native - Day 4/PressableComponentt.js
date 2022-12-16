import React, {useState} from "react"
import { StyleSheet, Text, View, Pressable } from 'react-native';
import styles from "./styles";

export default function PressableComponentt(){


    const [count,setCount] = useState(0)

    return(
        <View style={styles.container}>
            <Text>{count}</Text>
            <Pressable style={({pressed})=>[{backgroundColor : pressed ? "red" : "yellow"},styles.text]} onPress={()=>setCount(count+1)}>
                {({pressed})=><Text>{pressed ? "Pressed" : "Press Me"}</Text>}
            </Pressable>
        </View>
    );
}