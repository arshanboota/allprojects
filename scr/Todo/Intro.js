import { View, Text,Image,TouchableOpacity  } from 'react-native'
import React from 'react'

const Intro = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#EDEDED',padding:25,margin:20}}>
      <Image style={{padding:150}} source={require ('../assets/pic.png')}/>
      <Text style={{padding:15,fontWeight:'700',fontSize:17}}>
          Getting things done with TODo
      </Text>
      <Text style={{padding:20}}>
            learn ipsum dolor sit amet.
        consectetur adipisicing.Maxime,
        tempore! Animi nemo our otque,
        deleniti nihi dolorem repellendus
      </Text>
      <TouchableOpacity style={{ backgroundColor: '#55847A', alignItems: 'center', justifyContent: 'center',height:'60',width:'260',paddingTop:10,paddingBottom:10 }}onPress={() => navigation.navigate('Second')}>
        <Text style={{fontSize:20,color:'white'}} >Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Intro