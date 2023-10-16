import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../FirebaseProject/firebase'

const SignIn = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
    
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
   

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    flex:0.08,bottom:-40, backgroundColor: '#5200FF', alignItems: 'center', justifyContent:'center',height:'55',width:'100%',paddingTop:10,paddingBottom:10 ,borderRadius:65
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
   
  },
})