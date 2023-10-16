
import {View,Text,ImageBackground,Image,TextInput,TouchableOpacity,FlatList, } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import { deviceHeight,deviceWidth } from './Dimension';
  import Icon from 'react-native-vector-icons/Ionicons';
  import Cards from './Cards';
  
  export default function Home(props) {
    const [city, setCity] = useState('');
  
    const cities = [
      {
        name: 'New Delhi',
        image: require('../assets/11.png'),
      },
      {
        name: 'New York',
        image: require('../assets/12.png'),
      },
      {
        name: 'London',
        image: require('../assets/13.png'),
      },
      {
        name: 'San Francisco',
        image: require('../assets/14.png'),
      },
      {
        name: 'New Jersey',
        image: require('../assets/14.png'),
      },
    ];
  
    return (
      <View>
        <ImageBackground
          source={require('../assets/Weather3.png')}
          style={{height: deviceHeight, width: deviceWidth}}
          imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
        />
        <View
          style={{
            position: 'absolute',
            paddingVertical: 2,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: deviceWidth - 20,
            }}>
            <Icon name="menu" size={46} color="white" />
            <Image
              source={('../assets/a.png')}
              style={{height: 46, width: 46, borderRadius: 50}}
            />
          </View>
  
          <View style={{paddingHorizontal: 20, marginTop: 60}}>
            <Text style={{fontSize: 40, color: 'white'}}>Hello </Text>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
              Search the city by the name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 16,
                paddingHorizontal: 10,
              }}>
              <TextInput
                value={city}
                onChangeText={val => setCity(val)}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
              />
              
              <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
                <Icon name="search" size={22} color="white" />
              </TouchableOpacity>
            </View>
  
            <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
              My Locations
            </Text>
            <FlatList
            horizontal
              data={cities}
              renderItem={({item}) => (
                <Cards name={item.name} image={item.image} navigation={props.navigation} />
              )}
            />
          </View>
        </View>
      </View>
    );
  }




  
// import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import { deviceHeight,deviceWidth } from './Dimension';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Cards from './Cards';

// export default function Home(props) {
//   const [city, setCity] = useState('');
//   return (
//     <View style={{flex:1,backgroundColor:'#035972'}}>
     
//       <View
//         style={{
//           position: 'absolute',
//           paddingVertical: 20,
//           paddingHorizontal: 10,
//         }}>
//         <View
//           style={{
            
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             width: deviceWidth - 20,
//           }}>
//         </View>

//         <View style={{ paddingHorizontal: 15, marginTop: 30 }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               borderRadius: 50,
//               borderWidth: 1,
//               borderColor: 'white',
//               marginTop: 16,
//               paddingHorizontal: 10,
//             }}>
//             <TextInput
//               value={city}
//               onChangeText={val => setCity(val)}
//               placeholder="Search City"
//               placeholderTextColor="white"
//               style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
//             />
//             <TouchableOpacity onPress={() => {
//               console.log("Navigating to 'DetailsScreen' screen");
//               props.navigation.navigate('DetailsScreen', { name: city });
//             }}>
//               <Icon name="search" size={22} color="white" />
//             </TouchableOpacity>
//           </View>     
//         </View>
//       </View>
//     </View>
//   );
// }