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
import burgerpng from '../../assets/burger.png'

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
            <Image style={productImg} source={burgerpng} />
            <Text style={titleStyle}>{title}</Text>
            <Text style={descriptionStyle}>{description}</Text>
            <Text style={priceStyle}>{price} MAD</Text>
            <ScrollView style={scrollViewVariables}>
              <View style={variablesRoot}>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
                <View style={row}>
                  <Pressable style={variableContainer}>
                    <Text style={variableNameStyle}>{variableName}</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={bottomSection}>
            <Pressable style={addProductButton}>
              <Text style={addProdcutTextStyle}>Add Product</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default ProductModal
