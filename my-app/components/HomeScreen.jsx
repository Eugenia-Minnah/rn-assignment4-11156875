import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({route}) {
    const {name,email} = route.params;


  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}