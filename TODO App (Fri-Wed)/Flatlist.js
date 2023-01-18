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
  ScrollView,
  Alert,
} from "react-native";
import Styles from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const COLORS = { primary: "#1f145c", white: "#fff" };

class FlatListt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
         //{key: 1, task: "First Task", completed: false}
      ],
      textinput: "",
    };
  }

  addTodo = () => {
    if (this.state.textinput == "") {
      Alert.alert("Error", "Please input your TODO Task");
    } else {
      Newtodo = {
        key: Math.random(),
        task: this.state.textinput,
        completed: false,
      };
      this.setState((state) => ({
        todos: [...state.todos, Newtodo],
      }));
      this.setState({ textinput: "" });
    }
    console.log(this.state.textinput);
   
  };

  marktodocomplete = (todoid) => {
    console.log(todoid);
    const newtodos = this.state.todos.map((item) => {
      if (item.key == todoid) {
        return { ...item, completed: true };
      }
      // console.log(item)
      // console.log(item.key.id)
      return item;
    });
    this.setState({ todos: newtodos });
  };

  deletetodo = (todoid) => {
    const newtodos = this.state.todos.filter((item) => item.key != todoid);
    this.setState({ todos: newtodos });
  };

  cleartodos = () => {
    Alert.alert("Confirm", "Clear todos?", [
      {
        text: "Yes",
        onPress: () => this.setState({ todos: [] }),
      },
      { text: "No" },
    ]);
  };

  

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={Styles.input}>AAYUSHI'S TODO APP</Text>
          <MaterialCommunityIcons
            onPress={this.cleartodos}
            style={{ marginLeft: 30 }}
            name="delete"
            size={30}
            color="red"
          />
        </View>

        <View style={{ height: 580 }}>
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                keyExtractor={(item) => item.key}
                data={this.state.todos}
                renderItem={({ item }) => (
                  <View>
                    <View
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        flex: 1,
                        padding: 20,
                        backgroundColor: COLORS.white,
                        flexDirection: "row",
                        elevation: 12,
                        borderRadius: 12,
                        marginVertical: 10,
                        color: COLORS.primary,
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine:
                            item.completed === true ? "line-through" : "none",
                          margin: 2,
                        }}
                      >
                        {item.task}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          justifyContent: "flex-end",
                        }}
                      >
                        {item.completed === false && (
                          <TouchableOpacity
                            onPress={() => this.marktodocomplete(item.key)}
                            style={{
                              height: 25,
                              width: 25,
                              backgroundColor: "green",
                              justifyContent: "center",
                              alignItems: "center",
                              margin: 2,
                            }}
                          >
                            <MaterialCommunityIcons
                              name="check"
                              color={"white"}
                              size={18}
                            />
                          </TouchableOpacity>
                        )}
                        <TouchableOpacity
                          onPress={() => this.deletetodo(item.key)}
                          style={{
                            height: 25,
                            width: 25,
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 2,
                          }}
                        >
                          <MaterialCommunityIcons
                            name="delete"
                            color={"white"}
                            size={18}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </View>

        <View style={Styles.footer}>
          <View style={Styles.inputcontainer}>
            <TextInput
              fontSize={15}
              padding={10}
              placeholder="Add your TODO Tasks here"
              value={this.state.textinput}
              onChangeText={(textinput) => {
                this.setState({ textinput: textinput });
              }}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={this.addTodo}>
            <View style={Styles.iconContainer}>
              <MaterialCommunityIcons
                name="plus"
                color={COLORS.white}
                size={30}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FlatListt;

