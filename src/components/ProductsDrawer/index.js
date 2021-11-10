import React, { useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import { setSelectedPlateAction } from '../../store/Menu'
import Card from '../card'
import { useDispatch } from 'react-redux'

const ProductsDrawer = ({ setModalProductVisible, category }) => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (category) setProducts(category.products)
  }, [category])
  return (
    <ScrollView style={{ marginBottom: 100, width: '100%' }}>
      {products.length
        ? <View style={{ width: '100%', flexWrap: 'wrap', padding: 0, flexDirection: 'row', justifyContent: 'flex-start', flex: 1, height: '100%', marginBottom: 15 }}>
          {products.map((p, i) => (
            <Card
              key={i}
              title={p.title}
              photo={p.image}
              price={p.price}
              description='hot & cold'
              handlePress={() => {
                dispatch(setSelectedPlateAction(p))
                setModalProductVisible(true)
              }}
            />
          ))}
        </View>
        : <Text>Empty </Text>}
    </ScrollView>
  )
}
export default ProductsDrawer
