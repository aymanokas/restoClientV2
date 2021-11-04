import React, { useState } from 'react'
import style from './style'
import {
  View,
  Image,
  ScrollView
} from 'react-native'
import logopng from '../../assets/logo.png'
import CategoryText from '../categoryText'

const Sidenav = () => {
  const { root, logoStyle, scrollViewStyle } = style
  const [activeCategory, setActiveCategory] = useState(0)
  return (
    <View style={root}>
      <Image style={logoStyle} source={logopng} />
      <ScrollView style={scrollViewStyle}>
        <CategoryText name='category 1' isSelected={activeCategory === 0} handlePress={() => setActiveCategory(0)} />
        <CategoryText name='category 2' isSelected={activeCategory === 1} handlePress={() => setActiveCategory(1)} />
        <CategoryText name='category 3' isSelected={activeCategory === 2} handlePress={() => setActiveCategory(2)} />
        <CategoryText name='category 4' isSelected={activeCategory === 3} handlePress={() => setActiveCategory(3)} />
        <CategoryText name='category 5' isSelected={activeCategory === 4} handlePress={() => setActiveCategory(4)} />
        <CategoryText name='category 5' isSelected={activeCategory === 5} handlePress={() => setActiveCategory(5)} />
        <CategoryText name='category 5' isSelected={activeCategory === 6} handlePress={() => setActiveCategory(6)} />
        <CategoryText name='category 5' isSelected={activeCategory === 7} handlePress={() => setActiveCategory(7)} />
        <CategoryText name='category 5' isSelected={activeCategory === 8} handlePress={() => setActiveCategory(8)} />
        <CategoryText name='category 5' isSelected={activeCategory === 9} handlePress={() => setActiveCategory(9)} />
      </ScrollView>
    </View>
  )
}
export default Sidenav
