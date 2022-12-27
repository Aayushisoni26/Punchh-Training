import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Propcomponent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const {textData, imgsrc} = this.props;
        return(
            <View>
            <Text> {textData}</Text>
            <Image source = {imgsrc}/>
        </View>
        )
    }
}


export default Propcomponent;