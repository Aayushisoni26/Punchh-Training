import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListItem,
} from "react-native";
import Styles from "./Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const COLORS = { primary: "#1f145c", white: "#fff" };

class Headerr extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={Styles.input}>Aayushi's TODO App</Text>
          <MaterialCommunityIcons name="delete" size={25} color="red" />
        </View>
      </View>
    );
  }
}

export default Headerr;
