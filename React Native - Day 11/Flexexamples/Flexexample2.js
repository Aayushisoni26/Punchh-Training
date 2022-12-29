import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
export default class Flexexample2 extends Component {
  constructor(props) {
    super(props);
    this.state = { colorId: 0 };
  }
  onPress = (id) => {
    this.setState({ colorId: id });
  };

  render() {
    return (
      <View
        style={[
          { flexDirection: "row" },
          { flexWrap: "wrap" },
          { padding: 20 },
          { flex: 1 },
        ]}
      >
        <TouchableOpacity
          style={this.state.colorId === 1 ? styles.coral : styles.button}
          onPress={() => this.onPress(1)}
        >
          <Text>column</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.colorId === 2 ? styles.coral : styles.button}
          onPress={() => this.onPress(2)}
        >
          <Text>Row</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.colorId === 3 ? styles.coral : styles.button}
          onPress={() => this.onPress(3)}
        >
          <Text>Row-Reverse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.colorId === 4 ? styles.coral : styles.button}
          onPress={() => this.onPress(4)}
        >
          <Text>Column-Reverse</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "43%",
    textAlign: "center",
  },
  coral: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "coral",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "43%",
    textAlign: "center",
  },

  selected: {
    backgroundColor: "coral",
  },
});
