import React from 'react'
import style from './style'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable
} from 'react-native'

const Breadcrumb = () => {
  const { root, categoryText, foodText, arrow } = style
  return (
    <View style={root}>
      <Text style={categoryText}>Cocktails & Drinks</Text>
      <Text style={arrow}>&gt;</Text>
      <Text style={foodText}>Juice</Text>
    </View>
  )
}
export default Breadcrumb
