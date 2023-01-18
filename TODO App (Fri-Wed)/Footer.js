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
  KeyboardAvoidingView,
} from "react-native";
import Styles from "./Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const COLORS = { primary: "#1f145c", white: "#fff" };

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textinput: " ",
    };
  }

  render() {
    return <View></View>;
  }
}
