import React, { useEffect, useState } from 'react'
import style from './style'
import {
  View,
  Modal,
  Text,
  Pressable,
  ScrollView,
  TextInput
} from 'react-native'
import Card from '../card'
import { removeProductAction } from '../../store/Checkout'
import { useSelector, useDispatch } from 'react-redux'
import { useSocket } from '../../core/Socket'
import Snackbar from 'react-native-snackbar'
import uuid from 'react-native-uuid'
import CheckBox from '@react-native-community/checkbox'

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
    closeModalStyle,
    checkboxContainer,
    checkbox,
    checkboxLabel,
    input,
    addProductButtonDisabled,
    addProdcutTextStyleDisabled
  } = style
  const [orderType, setOrderType] = useState(0)
  const [number, onChangeNumber] = useState(null)
  const socket = useSocket()
  const dispatch = useDispatch()
  const order = useSelector(state => state.Checkout.order)
  const checkout = useSelector(state => state.Checkout)
  const handleRemoveProduct = (p) => {
    const filteredOrder = order.filter((o, i) => o.id !== p.id)
    dispatch(removeProductAction(filteredOrder))
  }
  const sendOrder = (number, orderType) => {
    const finalOrder = {
      id: uuid.v4(),
      ...checkout,
      tableId: number,
      orderStatus: orderType
    }
    console.log(finalOrder)
    if (socket.connected) {
      console.log('emit')
      socket.emit('order', finalOrder, (res) => {
        if (res.received) {
          setModalVisible(false)
          Snackbar.show({
            text: 'Order Submited Succesfully',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green'
          })
        } else {
          console.log('res no received')
        }
      })
    }
  }
  useEffect(() => order.length === 0 && setModalVisible(false), [order])
  return (
    <Modal
      animationType='fade'
      visible={modalVisible}
      transparent
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      {order.length
        ? <View style={modalBody}>
          <Pressable onPress={() => setModalVisible(!modalVisible)} style={leftSection} />
          <View style={rightSection}>
            <Pressable style={closeModalContainerStyle} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={closeModalStyle}>X</Text>
            </Pressable>
            <Text style={titleStyle}>Checkout</Text>
            <ScrollView style={{ width: '100%' }}>
              <View style={{ width: '100%', flexWrap: 'wrap', padding: 0, flexDirection: 'row', justifyContent: 'flex-start', flex: 1, height: '100%', marginBottom: 15 }}>
                {
                order.map((p, i) => (
                  <Card
                    key={i}
                    title={p.title}
                    photo={p.image}
                    price={p.price}
                    description='hot & cold'
                    checkout
                    handleRemove={() => handleRemoveProduct(p)}
                  />
                ))
              }
              </View>
            </ScrollView>
            <View style={bottomSection}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20, width: '100%', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, color: 'black', marginRight: 8 }}>Table Number : </Text>
                  <TextInput
                    style={input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='table number'
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <View style={checkboxContainer}>
                    <CheckBox
                      value={!orderType}
                      onValueChange={() => setOrderType(0)}
                      style={checkbox}
                      boxType='square'
                      onAnimationType='stroke'
                    />
                    <Text style={checkboxLabel}>Dine in</Text>
                  </View>
                  <View style={checkboxContainer}>
                    <CheckBox
                      value={orderType === 1}
                      onValueChange={() => setOrderType(1)}
                      style={checkbox}
                      boxType='square'
                      onAnimationType='stroke'
                    />
                    <Text style={checkboxLabel}>Take out</Text>
                  </View>
                  <View style={checkboxContainer}>
                    <CheckBox
                      value={orderType === 2}
                      onValueChange={() => setOrderType(2)}
                      style={checkbox}
                      boxType='square'
                      onAnimationType='stroke'
                    />
                    <Text style={checkboxLabel}>Delivery</Text>
                  </View>
                </View>
              </View>
              {number ? <Pressable onPress={() => sendOrder(number, orderType)} style={addProductButton}>
                <Text style={addProdcutTextStyle}>Confirm Checkout</Text>
              </Pressable>
              : <Pressable style={addProductButtonDisabled}>
                <Text style={addProdcutTextStyleDisabled}> &#9432;  Please add table number</Text>
              </Pressable>}
            </View>
          </View>
          </View>
        : null}
    </Modal>
  )
}
export default CheckoutModal
