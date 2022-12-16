import React from "react"
import {View, Text, SectionList} from "react-native"
import styles from "./styles"

export default function CustomSectionList(props){
    

    const Item = ({title})=>(
        <View>
            <Text style={styles.item}>{title}</Text>
        </View>
    )
    return(
        <View style={styles.container}>
            <SectionList 
            sections={props.data}
            keyExtractor={(item,index)=>item+index}
            renderItem={({item})=><Item title ={item}/>}
            renderSectionHeader={({section:{title}})=>(
                <Text style={styles.header}>{title}</Text>
            )}
            />
        </View>
    )
}