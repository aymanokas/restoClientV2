import React from 'react'
import {
  Text,
  View,
  Image,
  Pressable
} from 'react-native'
import style from './style'
import burgerpng from '../../assets/burger.png'

const Card = ({ photo, title, price, description, handlePress }) => {
  const { root, imageStyle, topSection, bottomSection, titleStyle, descriptionStyle, priceStyle  } = style
  return (
    <Pressable style={root} onPress={handlePress}>
      <View style={topSection}>
        <Image style={imageStyle} source={burgerpng} />
      </View>
      <View style={bottomSection}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
        <Text style={priceStyle}>{price} MAD</Text>
      </View>
    </Pressable>
  )
}
export default Card
