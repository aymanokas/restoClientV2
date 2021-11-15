import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import {
  Text,
  View
} from 'react-native'
import Sidenav from '../../components/sideNav'
import Breadcrumb from '../../components/breadcrumb'
import style from './style'
import CheckoutButton from '../../components/checkoutButton'
import ProductModal from '../../components/productModal'
import CheckoutModal from '../../components/checkoutModal'
import ProductsDrawer from '../../components/ProductsDrawer'
import { useSocket } from '../../core/Socket'
import { useSelector, useDispatch } from 'react-redux'
import { getMenuAction } from '../../store/Menu'
import Loader from '../../components/Loader'
import Snackbar from 'react-native-snackbar'

const Home = () => {
  const { root, leftSection, rightSection } = style
  const dispatch = useDispatch()
  const socket = useSocket()
  const [socketStatus, setSocketStatus] = useState(false)
  const [modalProductVisible, setModalProductVisible] = useState(false)
  const [modalCheckoutVisible, setModalCheckoutVisible] = useState(false)
  const [isLoadingSocket, setIsLoadingSocket] = useState(true)
  const [isLoadingMenu, setIsLoadingMenu] = useState(true)
  const order = useSelector(state => state.Checkout.order)
  const Menu = useSelector(state => state.Menu?.items)
  const selectedCategorie = useSelector(state => state.Menu?.selectedCategorie)
  useEffect(() => {
    if (socket) {
      setSocketStatus(socket.connected)
      setIsLoadingSocket(false)
      Snackbar.show({
        text: 'Connected Successfully',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'green'
      })
    }
  }, [socket])
  useEffect(() => {
    if (socket) {
      socket.emit('menu', {}, (m) => {
        console.log('Menu Socket : ', m)
        dispatch(getMenuAction(m))
        setIsLoadingMenu(false)
      })
    }
  }, [socket])
  return (
    <Layout isConnected={socketStatus}>
      <ProductModal
        modalVisible={modalProductVisible}
        setModalVisible={setModalProductVisible}
        title='Cheeseburger'
        description='hot and cold'
        price='69.5'
        variableName='variable 1'
      />
      <CheckoutModal
        modalVisible={modalCheckoutVisible}
        setModalVisible={setModalCheckoutVisible}
        title='Cheeseburger'
        description='hot and cold'
        price='69.5'
        variableName='variable 1'
      />
      <View style={root}>
        <View style={leftSection}>
          <Sidenav isLoadingMenu={isLoadingMenu} />
        </View>
        <View style={rightSection}>
          {!isLoadingSocket
            ? <>
              {!isLoadingMenu
                ? <>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Breadcrumb />
                    {order.length ? <CheckoutButton handlePress={() => { setModalCheckoutVisible(true) }} title='Checkout' /> : null}
                  </View>
                  <View style={{ height: 40 }} />
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Burgers</Text>
                  <View style={{ height: 40 }} />
                  <ProductsDrawer setModalProductVisible={setModalProductVisible} category={Menu[selectedCategorie]} />
                  </>
                : <Loader message='Loading Menu...' />}
              </>
            : <Loader message='Connecting to server...' />}
        </View>
      </View>
    </Layout>
  )
}
export default Home
