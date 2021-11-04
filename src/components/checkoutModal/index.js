import React from 'react'
import style from './style'
import {
  View,
  Modal,
  Text,
  Pressable,
  ScrollView
} from 'react-native'
import Card from '../card'

const CheckoutModal = ({ modalVisible, setModalVisible }) => {
  const {
    modalBody,
    titleStyle,
    bottomSection,
    leftSection,
    rightSection,
    addProductButton,
    addProdcutTextStyle,
    closeModalContainerStyle,
    closeModalStyle
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
        <View style={leftSection} />
        <View style={rightSection}>
          <Pressable style={closeModalContainerStyle} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={closeModalStyle}>X</Text>
          </Pressable>
          <Text style={titleStyle}>Checkout</Text>
          <ScrollView style={{ marginBottom: 100, width: '100%' }}>
            <View style={{ width: '100%', flexWrap: 'wrap', padding: 12, flexDirection: 'row', justifyContent: 'flex-start', flex: 1, height: '100%', marginBottom: 15 }}>
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                checkout
              />
            </View>
          </ScrollView>
          <View style={bottomSection}>
            <Pressable style={addProductButton}>
              <Text style={addProdcutTextStyle}>Confirm Checkout</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default CheckoutModal
