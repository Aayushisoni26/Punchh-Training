import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store";
import IceCreamContainer from "./Components/IceCreamContainer";
import MuffinContainer from "./Components/MuffinContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={{ margin: 50 }}>
            <CakeContainer />
          </View>
          <View style={{ margin: 50 }}>
            <IceCreamContainer />
          </View>
          <View style={{ margin: 50 }}>
            <MuffinContainer />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
