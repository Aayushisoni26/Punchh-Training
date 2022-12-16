import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const OurServices = () => {
  const route = useRoute()
  console.log('route', route)
  return (
    <View>
      <Text>Our Services</Text>
    </View>
  )
}

export default OurServices