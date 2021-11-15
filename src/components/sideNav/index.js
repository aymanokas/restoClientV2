import React, { useEffect, useState } from 'react'
import style from './style'
import {
  View,
  Image,
  ScrollView,
  Animated
} from 'react-native'
import logopng from '../../assets/logo.png'
import CategoryText from '../categoryText'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategoryAction } from '../../store/Menu'

const Sidenav = ({ isLoadingMenu }) => {
  const { root, logoStyle, scrollViewStyle } = style
  const logoPosition = useState(new Animated.Value(300))[0]
  const dispatch = useDispatch()
  const Menu = useSelector(state => state.Menu?.items)
  const selectedCategorie = useSelector(state => state.Menu?.selectedCategorie)
  useEffect(() => {
    if (!isLoadingMenu) {
      Animated.spring(logoPosition, {
        toValue: 0,
        speed: 7,
        delay: 0,
        useNativeDriver: true
      }).start()
    }
  }, [isLoadingMenu])
  return (
    <View style={root}>
      <Animated.View style={{ transform: [{ translateY: logoPosition }] }}>
        <Image style={logoStyle} source={logopng} />
      </Animated.View>
      <ScrollView style={scrollViewStyle}>
        {
          Menu.map((c, i) => (
            <CategoryText key={i} index={i} name={c.title} isSelected={selectedCategorie === i} handlePress={() => dispatch(setActiveCategoryAction(i))} />
          ))
        }
      </ScrollView>
    </View>
  )
}
export default Sidenav
