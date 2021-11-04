import React, { useState, useEffect } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer theme={{ colors: { background: 'transparent' } }}>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{title: '', headerBackVisible: false, headerShown: false }}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
