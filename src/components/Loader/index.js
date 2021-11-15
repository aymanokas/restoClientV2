import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import style from './style'

const Loader = ({ message }) => {
  const { root, subText } = style
  return (
    <View style={root}>
      <ActivityIndicator size='large' color='black' />
      <Text style={subText}>{message}</Text>
    </View>
  )
}

export default Loader
