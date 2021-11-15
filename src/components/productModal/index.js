import React, { useEffect, useState } from 'react'
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
import { addProductAction } from '../../store/Checkout'
import Snackbar from 'react-native-snackbar'
import uuid from 'react-native-uuid'

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
    scrollViewVariables,
    variableContainerActive
  } = style
  const dispatch = useDispatch()
  const plate = useSelector(state => state.Menu?.selectedPlate)
  const [plateToAdd, setPlateToAdd] = useState({})
  useEffect(() => { setPlateToAdd(plate) }, [plate])
  useEffect(() => console.log('plateToAdd : ', plateToAdd, [plateToAdd]))
  const handleAddProduct = p => {
    const plateWithId = {
      ...plateToAdd,
      id: uuid.v4()
    }
    dispatch(addProductAction(plateWithId))
    setModalVisible(false)
    Snackbar.show({
      text: `${p.title} Added`,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'green'
    })
  }
  const handleSetVariable = (obj) => {
    const variableToAdd = obj.selectedVariables
    const variableExist = plateToAdd.selectedVariables.includes(variableToAdd)
    console.log('variableExist : ', variableExist)
    const newSelectedVariables = variableExist
      ? plateToAdd.selectedVariables.filter((s, index) => s !== variableToAdd)
      : [...plateToAdd.selectedVariables, variableToAdd]
    const plateWithVariables = {
      ...obj.plate,
      selectedVariables: newSelectedVariables
    }
    setPlateToAdd(plateWithVariables)
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
                    <Pressable
                      style={plateToAdd?.selectedVariables?.includes(v) ? variableContainerActive : variableContainer} onPress={() => {
                        handleSetVariable({ plate: plate, selectedVariables: v })
                      }}
                    >
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
