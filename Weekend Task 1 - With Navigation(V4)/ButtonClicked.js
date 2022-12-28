import { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
export default class ButtonClicked extends Component{
    render(){
        return(
            <View style={{ flex: 1,backgroundColor: '#fff',alignItems: 'center'}}>
                <Text>Button Clicked</Text>
            </View>
        );
    }
}