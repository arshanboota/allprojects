import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCart1 = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    if (route.params && route.params.item) {
      const updatedCartItems = [...cartItems, route.params.item];
      setCartItems(updatedCartItems);
      saveCartItems(updatedCartItems);
    }
  }, [route.params]);

  const loadCartItems = async () => {
    const cartData = await AsyncStorage.getItem('cart');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCartItems(parsedCartData);
    }
  };

  const delCart = async (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    saveCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  };

  const saveCartItems = async (items) => {
    const cartData = JSON.stringify(items);
    await AsyncStorage.setItem('cart', cartData);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
        <Image style={{ position: 'absolute', right: 5, height: 50, width: 50 }} source={require('../assets/a.png')} />
        <Image
          style={{ position: 'absolute', left: 5, height: 45, width: 45, paddingHorizontal: 20, marginVertical: 10 }}
          source={require('../assets/apps.png')}
        />
      </View>
      {cartItems.map((cartItem, index) => (
        <View key={index}>
          <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  source={{ uri: cartItem.image }}
                  style={{ width: 147, resizeMode: 'contain', height: 207, borderRadius: 20, margin: 10 }}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#212F3C',
                    margin: 5,
                    borderRadius: 50,
                    borderWidth: 1,
                    height: 45,
                    width: 45,
                  }}
                  onPress={() => delCart(index)}
                >
                  <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>Del</Text>
                </TouchableOpacity>
              </View>
              <View>
              <Text style={{fontWeight:'bold'}}>{'\n'} Rs:{cartItem.price}</Text>
              <Text style={{fontWeight:'bold'}}>{'\n\n'} {cartItem.description}</Text>
              </View>

            </View>
          
          </View>
        </View>
      ))}
      <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          Total Price: Rs {getTotalPrice()}
        </Text>
      <Button  title='Check Out'/>
      </View>
    </ScrollView>
  );
};

export default MyCart1;
