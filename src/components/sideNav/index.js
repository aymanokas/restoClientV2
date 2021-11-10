import React from 'react'
import style from './style'
import {
  View,
  Image,
  ScrollView
} from 'react-native'
import logopng from '../../assets/logo.png'
import CategoryText from '../categoryText'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategoryAction } from '../../store/Menu'

const Sidenav = () => {
  const { root, logoStyle, scrollViewStyle } = style
  const dispatch = useDispatch()
  const Menu = useSelector(state => state.Menu?.items)
  const selectedCategorie = useSelector(state => state.Menu?.selectedCategorie)
  return (
    <View style={root}>
      <Image style={logoStyle} source={logopng} />
      <ScrollView style={scrollViewStyle}>
        {
          Menu.map((c, i) => (
            <CategoryText key={i} name={c.title} isSelected={selectedCategorie === i} handlePress={() => dispatch(setActiveCategoryAction(i))} />
          ))
        }
      </ScrollView>
    </View>
  )
}
export default Sidenav
