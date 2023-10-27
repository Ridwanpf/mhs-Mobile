import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import Home from "./src/pages/Home"
import Detail from './src/pages/Kembali'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Kembali from './src/pages/Kembali';
import pembayaran from './src/pages/pembayaran';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kembali" component={Kembali} />
        <Stack.Screen name="pembayaran" component={pembayaran}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App