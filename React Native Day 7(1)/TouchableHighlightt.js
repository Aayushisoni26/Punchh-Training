import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightt= () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);
  
    return (
      <View>

        <TouchableHighlight onPress={onPress}>
          <View >
            <Text>Touch Here</Text>
          </View>
        </TouchableHighlight>

        <View>

          <Text>
            {count || null}
          </Text>

        </View>
        
      </View>
    );
  }
  
  
  
  export default TouchableHighlightt;