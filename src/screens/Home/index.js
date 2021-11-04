import React, { useState } from 'react'
import Layout from '../../components/layout'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable
} from 'react-native'
import Sidenav from '../../components/sideNav'
import Breadcrumb from '../../components/breadcrumb'
import Card from '../../components/card'
import style from './style'
import CheckoutButton from '../../components/checkoutButton'
import ProductModal from '../../components/productModal'

const Home = () => {
  const { root, leftSection, rightSection } = style
  const [modalProductVisible, setModalProductVisible] = useState(false)
  return (
    <Layout>
      <ProductModal
        modalVisible={modalProductVisible}
        setModalVisible={setModalProductVisible}
        title='Cheeseburger'
        description='hot and cold'
        price='69.5'
        variableName='variable 1'
      />
      <View style={root}>
        <View style={leftSection}>
          <Sidenav />
        </View>
        <View style={rightSection}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Breadcrumb />
            <CheckoutButton title='Checkout' />
          </View>
          <View style={{ height: 40 }} />
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Burgers</Text>
          <View style={{ height: 40 }} />
          <ScrollView style={{ marginBottom: 100 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                handlePress={() => setModalProductVisible(true)}
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                handlePress={() => setModalProductVisible(true)}
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
                handlePress={() => setModalProductVisible(true)}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
              />
              <Card
                title='Cheeseburger'
                photo='https://toppng.com/uploads/preview/cocktail-glass-png-transparent-image-transparent-background-cocktail-drink-11563021490bpu501vqnr.png'
                price={69.5}
                description='hot & cold'
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Layout>
  )
}
export default Home
