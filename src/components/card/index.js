import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  Pressable,
  Animated
} from 'react-native'
import style from './style'

const Card = ({ photo, checkout, title, price, description, handlePress, handleRemove }) => {
  const { root, imageStyle, topSection, closeModalContainerStyle, closeModalStyle, bottomSection, titleStyle, descriptionStyle, priceStyle } = style
  const opacity = useState(new Animated.Value(0))[0]
  useEffect(() => {
    opacity.setValue(0)
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: 0,
      useNativeDriver: true
    }).start()
  }, [title])
  return (
    <Animated.View style={[root(checkout), { opacity: opacity }]}>
      <Pressable onPress={handlePress}>
        <View style={topSection}>
          <Image style={imageStyle} source={{ uri: photo }} />
        </View>
        <View style={bottomSection}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={descriptionStyle}>{description}</Text>
          <Text style={priceStyle}>{price} MAD</Text>
        </View>
      </Pressable>
      {checkout && (
          <Pressable onPress={handleRemove} style={closeModalContainerStyle}>
            <Text style={closeModalStyle}>Remove</Text>
          </Pressable>)}
    </Animated.View>
  )
}
export default Card
