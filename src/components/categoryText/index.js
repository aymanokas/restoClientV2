import React, { useEffect, useState } from 'react'
import style from './style'
import {
  Text,
  Pressable,
  Animated
} from 'react-native'

const CategoryText = ({index, name, isSelected, handlePress }) => {
  const { root, textStyle, textContainer, activeTextContainer } = style
  const value = useState(new Animated.Value(4000))[0]
  useEffect(() => {
    Animated.spring(value, {
      toValue: 0,
      duration: 1000,
      delay: (index + 1) * 100,
      bounciness: 1,
      useNativeDriver: true
    }).start()
  }, [])
  return (
    <Animated.View style={[root, { transform: [{ translateY: value }] }]}>
      <Pressable style={isSelected ? activeTextContainer : textContainer} onPress={handlePress}>
        <Text style={textStyle}>{name}</Text>
      </Pressable>
    </Animated.View>
  )
}
export default CategoryText
