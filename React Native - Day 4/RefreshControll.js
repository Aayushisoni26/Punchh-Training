import React, {useState} from "react"
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import styles from "./styles";

export default function RefreshControll(){

    const [refresh,setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)

        setTimeout(()=>{
        setRefresh(false)
        },4000)
    }

    return(

        <View>
            <ScrollView 
            refreshControl={
                <RefreshControl
                refreshing={refresh}
                onRefresh={()=>pullMe()}
            />
            }
            >
                <Text>Pull to refresh</Text>
        </ScrollView>
        </View>
    )
}