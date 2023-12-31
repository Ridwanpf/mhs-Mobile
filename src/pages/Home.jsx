import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

  return (
    <View>

      {/* HEADER */}

          <View style={{
       flexDirection:'row',
       height : 60,
       justifyContent : 'space-between', height : 60, 
       alignItems : 'center',
       backgroundColor : 'red',
       marginTop : 16,
       marginHorizontal : 16,
       padding : 16,
       borderRadius : 40,
      }}>
           <Image resizeMode='contain' style={{ height : 40, width :150}} source={require ('../assets/images/Bola.png')}/>
        
               <View style={{height:40, width:40, borderRadius: 20, backgroundColor :'yellow'}}>
      
               </View>
            </View>

            <View>
              <Text style= {{marginTop : 14,
              fontWeight:'bold',
              color :  'rgb(0,0,0)'
              }}>Menu makanan</Text>
            </View>

            <View
            style = {{
              marginTop: 10,
              flexDirection :'row',
            }}
            >
                <View
            style={{
              flex: 1,
              padding: 12,
            }}
            >
               <View>
                <Image resizeMode= 'contain'    style = {{ height: 148, borderRadius:12, alignItems : 'center', width:184}} source={require ('../assets/images/nasgor.jpg')}/>
               </View>
               
           
               <View>
               <Text style = {{marginTop : 12, 
                fontSize :16, 
                fontWeight: 'bold',
                color : 'rgb(255,0,0)'
                }}>Nasi goreng</Text>
               <Text style = {{ marginTop:4}}>Rp15.000</Text>
              </View>

                </View>
                <View
            style={{
              flex: 1,
              padding: 12,
            }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Kembali')}>
              <View>
                <Image resizeMode= 'contain'    style = {{ height: 148, borderRadius:12, alignItems : 'center', width:184}} source={require ('../assets/images/Resep-Nasi-Tumpeng-Kuning-1200x900.jpg')}/>
                </View>
              
                <View>
                  <Text style = {{
                    marginTop :12,
                    color : 'rgb(255,0,0)',
                    fontSize : 16,
                    fontWeight : 'bold'
                  }}>Nasi Tumpeng</Text>
                  <Text style = {{
                    marginTop : 4
                  }}>Rp24.500 </Text>
                </View>
                </TouchableOpacity>
            
              </View>
              
            
              
   
            </View>

            <View>
              <Text style= {{marginTop : 14,
              fontWeight:'bold',
              color :  'rgb(0,0,0)'
              }}>Menu makanan</Text>
            </View>

            <View
            style = {{
              marginTop: 30,
              flexDirection :'row',
            }}
            >
                <View
            style={{
              flex: 1,
              padding: 12,
            }}
            >
               <View
               style = {{
                height :150,
 
                borderRadius: 12,
               }}
               >
                <Image resizeMode= 'contain'    style = {{ height: 148, borderRadius:12, alignItems : 'center', width:184}} source={require ('../assets/images/lime.jpg')}/>
               </View>
               <View>
               <Text style = {{marginTop : 12, 
                fontSize :16, 
                fontWeight: 'bold',
                color : 'rgb(255,0,0)'
                }}>Water with lime</Text>
               <Text style = {{ marginTop:4}}>Rp60.000</Text>
               
              </View>

                </View>
                <View
            style={{
              flex: 1,
              padding: 12,
            }}
            >
              <View
               style = {{
                height :150,
    
                borderRadius: 12
               }}
               >
                <Image resizeMode= 'contain'    style = {{ height: 148, borderRadius:12, alignItems : 'center', width:184}} source={require ('../assets/images/test.jpg')}/>
                </View>
                <View>
                  <Text style = {{
                    marginTop :12,
                    color : 'rgb(255,0,0)',
                    fontSize : 16,
                    fontWeight : 'bold'
                  }}>Rose tea with grapes</Text>
                  <Text style = {{
                    marginTop : 4
                  }}> Rp 100.000 </Text>
                </View>
            
              </View>
              
            
              
   
            </View>
      </View>


  )
}

export default Home