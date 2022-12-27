import React, {Component} from "react";
import {View, SafeAreaView, StyleSheet, Text, Dimensions, Button} from 'react-native'

// class Dimension extends Component {
//     constructor(props) {
//         super(props);
//         const {width, height} = Dimensions.get("window")
//         this.state = {
//             width,
//             height
//         }
//     }
//     onLayout() {
//         const {width, height} = Dimensions.get("window")
//         this.setState({
//             width,
//             height
//         })
//     }
//     render() {
//         return (
//             <View onLayout={()=> this.onLayout()}>
//                 <Text>Width: {this.state.width}</Text>
//                 <Text>Height: {this.state.height}</Text>
//             </View>
//         )
//     }

// }


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const showdimension = () => {
    console.log(deviceHeight + " " + deviceWidth);
}

const display = (color) => (

            
            <View style={{
          height: deviceHeight / 3,
          width: (deviceWidth / 2) - 20,
          backgroundColor: color,
          borderRadius: 20,
          padding: 16,
          margin: 10
        }}>
                <Text style={{fontSize: 25, color: "white"}}>
                    This is a responsive element
                </Text>
            </View>
       
)
class Dimension extends Component {
    constructor(){
    super();
    
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {display("red")}
      {display("green")}
      {display("blue")}
      {display("black")}
    </View>

        )
}
}


export default Dimension;