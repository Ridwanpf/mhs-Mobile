import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Home from "./src/pages/Home"

const App = () => {
  const onPress = () => {
    Alert.alert ('Pembayaran berhasil')
  }
  return (
    <View>
      <Home/>

    </View>


  )
}

export default App