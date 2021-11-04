import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import style from './style'

const Layout = ({ children }) => {
  const { root, safeAreaClass, serverStatusContainer, serverStatus, serverStatusText } = style
  return (
    <>
      <SafeAreaView style={safeAreaClass}>
        <View style={serverStatusContainer}>
          <View style={serverStatus} />
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
