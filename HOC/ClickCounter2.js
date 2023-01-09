import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import withcounter from "./Withcounter";

export class ClickCounter2 extends Component {
  render() {
    const { count, incrementcount } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "pink",
            borderColor: "black",
            borderRadius: 4,
            borderWidth: 2,
            padding: 5,
          }}
          onPress={incrementcount}
        >
          <Text>
            {this.props.name} Clicked {count} Times
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withcounter(ClickCounter2, 10);
