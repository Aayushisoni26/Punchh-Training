import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ClickCounter from "./ClickCounter";
import ClickCounter2 from "./ClickCounter2";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClickCounter name="Aayushi" />
        <ClickCounter2 name="Aayushi Soni" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
