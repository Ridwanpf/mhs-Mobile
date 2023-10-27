import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


const Kembali = ({navigation}) => {

  return (
    <View>
      <Image style={{
        height :300,
        width : 350,
        alignItems : 'center',
        marginHorizontal :40,
        marginTop : 30,
        borderRadius : 15,
      }} source={require ('../assets/images/Resep-Nasi-Tumpeng-Kuning-1200x900.jpg')}/>

      <View>
        <Text style = {{
          fontWeight : 'bold',
          marginLeft : 40,
          marginTop : 10
        }}>Nasi tumpang                                       Rp 24.500</Text>

        <Text style = {{
          textAlign : 'justify',
          marginHorizontal : 40,
          marginTop : 10,
          color :   'rgb(192,192,192)'
        }}>
        Nasi berbentuk kerucut, urap ,
        serundeng, ayam bakar, ayam goreng, tempe kering, telur pindang,
        telur dadar yang diiris, teri kacang.
        </Text>

        <View>
          <TextInput style = {{
            height : 50,
            borderWidth :1,
            width : 350,
            borderRadius : 40,
            marginTop : 40,
            alignItems : 'center',
            marginHorizontal : 40
          }}  placeholder='Menu tambahan'>
          </TextInput>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('pembayaran')}>
        <View style = {{
          borderWidth : 1,
          height : 40,
          borderRadius : 30,
          backgroundColor : 'red',
          marginTop : 180,
          width : 350,
          marginHorizontal : 40
        }}>
        
        <Text style = {{
          textAlign : 'center',
          marginTop : 8,
          color : 'rgb(255,255,255)'
        }}>
          Pembayaran
        </Text>

        </View>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Kembali