import React from 'react'
import style from './style'
import {
  View,
  Image,
  Modal,
  Text,
  Pressable,
  ScrollView
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'react-native-uuid'
import { addProductAction } from '../../store/Checkout'

const ProductModal = ({ modalVisible, setModalVisible, title, description, price, variableName }) => {
  const {
    modalBody,
    topSection,
    productImg,
    titleStyle,
    descriptionStyle,
    priceStyle,
    bottomSection,
    row,
    variableContainer,
    variableNameStyle,
    leftSection,
    rightSection,
    addProductButton,
    addProdcutTextStyle,
    closeModalContainerStyle,
    closeModalStyle,
    variablesRoot,
    scrollViewVariables
  } = style
  const dispatch = useDispatch()
  const plate = useSelector(state => state.Menu?.selectedPlate)
  const handleAddProduct = p => {
    p = {
      ...p,
      id: uuid.v4(),
      selectedVariables: []
    }
    dispatch(addProductAction(p))
  }
  return (
    <Modal
      animationType='fade'
      visible={modalVisible}
      transparent
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={modalBody}>
        <Pressable onPress={() => setModalVisible(!modalVisible)} style={leftSection} />
        <View style={rightSection}>
          <Pressable style={closeModalContainerStyle} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={closeModalStyle}>X</Text>
          </Pressable>
          <View style={topSection}>
            <Image style={productImg} source={{ uri: plate.image }} />
            <Text style={titleStyle}>{plate.title}</Text>
            <Text style={descriptionStyle}>{plate.description}</Text>
            <Text style={priceStyle}>{plate.price} MAD</Text>
            <ScrollView style={scrollViewVariables}>
              <View style={variablesRoot}>
                {plate.variables?.map((v, i) => (
                  <View key={i} style={row}>
                    <Pressable style={variableContainer}>
                      <Text style={variableNameStyle}>{v}</Text>
                    </Pressable>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={bottomSection}>
            <Pressable onPress={() => handleAddProduct(plate)} style={addProductButton}>
              <Text style={addProdcutTextStyle}>Add Product</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default ProductModal
