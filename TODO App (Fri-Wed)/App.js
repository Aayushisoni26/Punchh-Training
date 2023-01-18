import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ListItem,
  ScrollView,
} from "react-native";
import Styles from "./Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FlatListt from "./Flatlist";
import Headerr from "./Header";

class App extends Component {
  render() {
    return (
      <View>
        <FlatListt />
      </View>
    );
  }
}
export default App;
