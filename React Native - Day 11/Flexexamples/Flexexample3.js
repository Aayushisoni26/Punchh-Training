import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export default class Flexexample3 extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <View style={styles.container}>
          <Text style={styles.box}>ONE</Text>
          <Text style={styles.box}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={styles.box}>FOUR</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.box}>ONE</Text>
          <Text style={styles.box}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={styles.box}>FOUR</Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.box}>ONE</Text>
          <Text style={styles.box}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={styles.box}>FOUR</Text>
        </View>

        <View style={styles.container4}>
          <Text style={[styles.box, { alignSelf: "flex-start" }]}>ONE</Text>
          <Text style={[styles.box, { alignSelf: "baseline" }]}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={[styles.box, { alignSelf: "flex-end" }]}>FOUR</Text>
        </View>

        <View style={styles.container5}>
          <Text
            style={[
              styles.box,
              { alignSelf: "stretch", width: "auto", minWidth: 50 },
            ]}
          >
            ONE
          </Text>
          <Text style={[styles.box, { alignSelf: "center" }]}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={styles.box}>FOUR</Text>
        </View>

        <View style={styles.container6}>
          <Text style={styles.box}>ONE</Text>
          <Text style={styles.box}>TWO</Text>
          <Text style={styles.box}>THREE</Text>
          <Text style={styles.box}>FOUR</Text>
          <Text style={styles.box}>FIVE</Text>
          <Text style={styles.box}>SIX</Text>
          <Text style={styles.box}>SEVEN</Text>
          <Text style={styles.box}>EIGHT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  container2: {
    backgroundColor: "aliceblue",
    justifyContent: "flex-end",
    padding: 20,
    marginTop: 20,
    height: 450,
  },
  container3: {
    marginTop: 20,
    height: 200,
    backgroundColor: "aliceblue",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  container4: {
    marginTop: 20,
    backgroundColor: "aliceblue",
    flexDirection: "column-reverse",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  container5: {
    marginTop: 20,
    backgroundColor: "aliceblue",
    flexDirection: "column",
    height: 400,
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  container6: {
    marginTop: 20,
    backgroundColor: "aliceblue",
    flexDirection: "column",
    height: 300,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  box: {
    height: 65,
    width: 65,
    backgroundColor: "skyblue",
    margin: 4,
    paddingLeft: 10,
  },
});

{
  /* <View style={{ flex: 1, backgroundColor: "pink", margin:4 }}/>
        <View style={{ flex: 2, backgroundColor: "blue", margin:4 }} />
        <View style={{ flex: 3, backgroundColor: "yellow", margin:4 }} /> */
}
