import React from 'react'
import {
  Text,
  Pressable
} from 'react-native'
import style from './style'

const CheckoutButton = ({ handlePress, title }) => {
  const { root, textStyle } = style
  return (
    <Pressable onPress={handlePress} style={root}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  )
}
export default CheckoutButton
