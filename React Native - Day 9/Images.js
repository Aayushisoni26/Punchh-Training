import React, { Component } from "react";
import { View } from "react-native";
import Propcomponent from "./Propcomponent";

class Images extends Component{
    render() {
        return(
            <View>
            <Propcomponent textData = "This is my first image"
            imgsrc = {require(".//assets/3.png")}/>
            <Propcomponent textData = "This is my second image"
            imgsrc = {require(".//assets/5.png")}/>
            <Propcomponent textData = "This is my third image"
            imgsrc = {require(".//assets/7.png")}/>

            </View>
        )
    }
}


  
export default Images;