import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Flexexample1 extends Component {
  render() {
    return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    padding: 20,
    //   justifyContent: "space-around"
  },
});
