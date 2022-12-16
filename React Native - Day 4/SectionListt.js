import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styles from "./styles";

export default function SectionListt(){

    const DATA = [
        {
            title:"Section List - Main Items",
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

    const Item = ({title}) =>(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>

        </View>
    )

    return(
        <View style={styles.container}>
            <SectionList 
            sections={DATA}
            keyExtractor={(item,index)=>item+index}
            renderItem={({item})=><Item title ={item}/>}
            renderSectionHeader={({section:{title}})=>(
                <Text style={styles.header}>{title}</Text>
            )}
            />
        </View>
    )
}
