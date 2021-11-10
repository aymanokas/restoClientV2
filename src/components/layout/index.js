import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import style from './style'

const Layout = ({ children, isConnected }) => {
  const { root, safeAreaClass, serverStatusContainer, serverStatusOn, serverStatusOff, serverStatusText } = style
  return (
    <>
      <SafeAreaView style={safeAreaClass}>
        <View style={serverStatusContainer}>
          <View style={isConnected ? serverStatusOn : serverStatusOff} />
          <Text style={serverStatusText}>Connected</Text>
        </View>
        <View style={root}>
          {children}
        </View>
      </SafeAreaView>
    </>
  )
}

export default Layout
