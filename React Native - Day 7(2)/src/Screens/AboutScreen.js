import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
const AboutScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button title="Go to bACK" onPress={()=>navigation.goBack()}></Button>
      <Button title="Go to Service" onPress={()=>navigation.navigate('Our Services')}></Button>
      <Button title="Go to Service with Params" onPress={()=>navigation.navigate('Our Services', {id:22, otherParams: "other params here"})}></Button>
    </View>
  )
}

export default AboutScreen