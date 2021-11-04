import React from 'react'
import style from './style'
import {
  Text,
  View,
  Pressable
} from 'react-native'

const CategoryText = ({ name, isSelected, handlePress }) => {
  const { root, textStyle, textContainer, activeTextContainer } = style
  return (
    <View style={root}>
      <Pressable style={isSelected ? activeTextContainer : textContainer} onPress={handlePress}>
        <Text style={textStyle}>{name}</Text>
      </Pressable>
    </View>
  )
}
export default CategoryText
