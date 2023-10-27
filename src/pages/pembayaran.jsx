import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const pembayaran = ({navigation}) => {
return (
    <View>
    <Image style = {{
        resizeMode : 'contain',
        height : 200,
        width : 250,
        marginTop : 50,
        marginHorizontal : 85

    }} source={require ('../assets/images/Centang.png')}/>

    <Text style = {{
        marginTop : 30,
        marginHorizontal : 100,
        fontWeight : 'bold',
        fontSize : 20
    }}> Pemesanan sukses</Text>

    <Text style = {{
        marginTop : 30
    }}>Pesanan anda telah sukses dan akan segera kami proses</Text>
    <Text style = {{
        marginHorizontal : 140
    }}>Mohon di tunggu ya</Text>


    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <View  style = {{
        borderWidth : 1,
        height : 40,
        width : 350,
        borderRadius : 40,
        backgroundColor : 'red',
        marginTop : 250,
        marginHorizontal : 40
    }}>
    <Text style = {{
        textAlign : 'center',
        marginTop : 6,
        color : 'rgb(255,255,255)'
    }}>
        Kembali ke Home
    </Text>
    </View>
    </TouchableOpacity>
    </View>
)
}

export default pembayaran