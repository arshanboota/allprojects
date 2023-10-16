import { View, Text,Image,TouchableOpacity  } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SignIn from './SignIn'
import { useNavigation } from '@react-navigation/native';
const Signout = ({navigation}) => {
  return (
    <LinearGradient
    colors={['#83E1FF', '#000E56']}
    start={{ x: 0, y: 1 }}
    end={{ x: 0, y: 0 }}
    style={{ flex: 1 }}>
    <View style={{flex:1,padding:25,margin:20}}>
     
      <TouchableOpacity style={{flex:0.08,bottom:-100, backgroundColor: '#5200FF', alignItems: 'center', justifyContent:'center',height:'55',width:'60',paddingTop:10,paddingBottom:10 ,borderRadius:65}}
      onPress={() => navigation.navigate('First')}>
        <Text style={{fontSize:20,color:'white'}} >Let Started</Text>
      </TouchableOpacity>
      <SignIn/>
    </View>
    </LinearGradient>
  )
}

export default Signout