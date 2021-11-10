import React from 'react'
import {
  Text,
  View,
  Image,
  Pressable
} from 'react-native'
import style from './style'

const Card = ({ photo, checkout, title, price, description, handlePress }) => {
  const { root, imageStyle, topSection, closeModalContainerStyle, closeModalStyle, bottomSection, titleStyle, descriptionStyle, priceStyle } = style
  return (
    <Pressable style={root(checkout)} onPress={handlePress}>
      <View style={topSection}>
        <Image style={imageStyle} source={{ uri: photo }} />
      </View>
      <View style={bottomSection}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
        <Text style={priceStyle}>{price} MAD</Text>
      </View>
      {checkout && (
        <Pressable style={closeModalContainerStyle}>
          <Text style={closeModalStyle}>X</Text>
        </Pressable>)}
    </Pressable>
  )
}
export default Card
