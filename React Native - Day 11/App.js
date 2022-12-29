import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Flexexample1 from "./Flexexamples/Flexexample1";
import Flexexample2 from "./Flexexamples/Flexexample2";
import Flexexample3 from "./Flexexamples/Flexexample3";
import Flexexample4 from "./Flexexamples/Flexexample4";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Flexexample1 />
        <Flexexample2 />
        <Flexexample3 />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
