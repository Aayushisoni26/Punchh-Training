import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import Style from "./Style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const COLORS = { primary: "#1f145c", white: "#fff" };
class Flatlistt extends Component {
  constructor() {
    super();
    this.state = {
      datas: [
        {
          key: 1,
          data1: "Lab",
          data2: "1476.58 miles",
          data3: "123 Test St.,",
          data4: "Austin, TX, United States, 78701",
          data5: "",
        },
        {
          key: 2,
          data1: "Kwik Stop 88",
          data2: "1656.24 miles",
          data3: "504 3rd Street,",
          data4: "Delhi, IA, United States, 52223",
          data5: "GiftCard",
        },
        {
          key: 3,
          data1: "Kwik Stop 82",
          data2: "1680.70 miles",
          data3: "185 Peosta Street,",
          data4: "Peosta, IA, United States, 52068",
          data5: "GiftCard",
        },
        {
          key: 4,
          data1: "Kwik Stop 78",
          data2: "1686.35 miles",
          data3: "4039 Pennsylvania Ave.,",
          data4: "Dubuque, IA, United States, 52002",
          data5: "GiftCard",
        },
      ],
    };
  }

 
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={this.state.datas}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "#F0F0F0" }}>
              <View style={Style.flatlistcontainer}>
                <View>
                  <Text style={Style.data1style}>
                    {item.data1} {"\n"}{" "}
                  </Text>
                </View>

                <View style={{ marginTop: -20, flexDirection: "row" }}>
                  <Text style={Style.data2style}>
                    {item.data2} {"\n"}
                  </Text>
                  
                  <View>
                  {item.data5.length !== 0 ? (
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ButtonClicked")}
                      style={Style.icon1style}
                     
                    ><MaterialCommunityIcons
                    name="menu-right"
                    size={44}
                    color="#1757A2"
                  />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ButtonClicked")}
                      style={Style.icon2style}
                     
                    ><MaterialCommunityIcons
                    name="menu-right"
                    size={44}
                    color="#1757A2"
                  />
                    </TouchableOpacity>
                  )}
                  </View>
                </View>

                <View style={{ marginTop: -33 }}>
                  <Text style={Style.data3style}>
                    {item.data3} {"\n"}
                  </Text>
                </View>

                <View style={{ marginTop: -20 }}>
                  <Text style={Style.data4style}>{item.data4}</Text>
                </View>

                <View style={{ marginTop: 8 }}>
                  {/* <TouchableOpacity style={Style.ButtonStyle} activeOpacity = { .5 }>
                            <Tßƒext style={Style.TextStyle}>{item.data5}</Text>
                        </TouchableOpacity> */}

                  {item.data5.length !== 0 ? (
                    <TouchableOpacity
                      style={Style.ButtonStyle}
                      activeOpacity={0.5}
                    >
                      <Text style={Style.TextStyle}>{item.data5}</Text>
                    </TouchableOpacity>
                  ) : (
                    ""
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Flatlistt;