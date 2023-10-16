 import {View, ImageBackground, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import { deviceHeight,deviceWidth } from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Detail(props) {
  const [data, setData] = useState(name);
  const { name } = props.route.params || { name: 'Rahimyar Khan' };

  useEffect(() => {
    fetchWeatherData(name); // Fetch weather data for Rahimyar Khan by default
  }, []);

  const fetchWeatherData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=a7eddfe5b4c790307e14c0ed49adf2dc&units=metric`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  };
  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );

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
          paddingVertical: 20,
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
            source={require('../assets/a.png')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
           
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <View style={{width: 200, height: 220,backgroundColor:'white',borderRadius:20}}>
              <Image
                source={{ uri: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` }}
                style={{ width: 200, height: 100,alignItems:'center', borderColor: 'black', borderRadius: 1 }}
              />
              <Text style={{color: 'black', fontSize: 40,textAlign:'center'}}>
              {(data.list[0].main.temp).toFixed(0)}&deg; C
            </Text>
            </View>

            
            <View >
            <Text style={{color: 'white', fontSize: 32, marginBottom: 16}}>Weather Details</Text>
            <View style={{width: deviceWidth - 60}}>
            <Text style={{color: 'white', fontSize: 19}}>
             Wind Speed : {(data.list[0].wind.speed)}
            </Text>
            <Text style={{color: 'white', fontSize: 19}}>
             Pressure :  {(data.list[0].main.pressure)}
            </Text>
            <Text style={{color: 'white', fontSize: 19}}>
             Humidity:  {(data.list[0].main.humidity)}
            </Text>
            <Text style={{color: 'white', fontSize: 19}}>
             Visibility :  {(data.list[0].visibility)}
            </Text>
            </View>
            </View>
          </View>
        ) : 
        <Text style={{fontSize:25,justifyContent:'center',alignItems:'center'}}>Loading...</Text>}
      </View>
    </View>
  );
}



// import {View, ImageBackground, Image, Text} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import { deviceHeight,deviceWidth } from './Dimension';
// import Icon from 'react-native-vector-icons/Ionicons';


// export default function Details(props) {
//   const [data, setData] = useState();
//   const {name} = props.route.params;
  
//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=a7eddfe5b4c790307e14c0ed49adf2dc&units=metric`,
//     )
//       .then(res => res.json())
//       .then(res => setData(res))
//       .catch(err => console.log(err));
//   }, []);
//   const Data = ({title, value}) => (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//       <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
//       <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
//     </View>
//   );

//   return (
//     <View>
//       <ImageBackground
//         source={require('../assets/Weather3.png')}
//         style={{height: deviceHeight, width: deviceWidth}}
//         imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
//       />
//       <View
//         style={{
//           position: 'absolute',
//           paddingVertical: 20,
//           paddingHorizontal: 10,
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             width: deviceWidth - 20,
//           }}>
//           <Icon name="menu" size={46} color="white" />
//           <Image
//             source={require('../assets/a.png')}
//             style={{height: 46, width: 46, borderRadius: 50}}
//           />
//         </View>

//         {data ? (
//           <View
//             style={{
//               flexDirection: 'column',
//               justifyContent: 'space-evenly',
//               alignItems: 'center',
//               height: deviceHeight - 100,
//             }}>
//             <View>
//               <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
//               <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
//                 {data['weather'][0]['main']}
//               </Text>
//             </View>

//             <Text style={{color: 'white', fontSize: 64}}>
//               {(data['main']['temp'] - 273).toFixed(2)}&deg; C
//             </Text>

//             <View>
//             <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>Weather Details</Text>
//             <View style={{width: deviceWidth - 60}}>
//               <Data value={data['wind']['speed']} title="Wind" />
//               <Data value={data['main']['pressure']} title="Pressure" />
//               <Data value={`${data['main']['humidity']}%`} title="Humidity" />
//               <Data value={data['visibility']} title="Visibility" />
//             </View>
//             </View>
//           </View>
//         ) : null}
//       </View>
//     </View>
//   );
// }


// import { View, ImageBackground, Image, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { deviceHeight,deviceWidth } from './Dimension';
// import Icon from 'react-native-vector-icons/Ionicons';


// export default function Detail(props) {
//   const [data, setData] = useState(name);
//   const { name } = props.route.params || { name: 'Rahimyar Khan' };

//   useEffect(() => {
//     fetchWeatherData(name); // Fetch weather data for Rahimyar Khan by default
//   }, []);

//   const fetchWeatherData = (cityName) => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=a7eddfe5b4c790307e14c0ed49adf2dc&units=metric`,
//     )
//       .then(res => res.json())
//       .then(res => setData(res))
//       .catch(err => console.log(err));
//   };

//   const Data = ({ title, value }) => (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//       <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
//       <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1, backgroundColor: '#035972', margin: '20' }}>
//       <View
//         style={{
//           position: 'absolute',
//           paddingVertical: 5,
//           paddingHorizontal: 10,
//         }}>
//         <View
//           style={{
//             alignItems: 'flex-end',
//             width: deviceWidth - 20,
//           }}>
//           <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
//             <Icon name="search" size={30} color="black" />
//           </TouchableOpacity>
//         </View>

//         {data ? (
//           <View >
//             <Text style={{ fontSize: 38, fontWeight: '700', marginTop: 40, color: 'white', textAlign: "center" }}>{name}</Text>
//             <View
//               style={{
//                 backgroundColor: 'white',
//                 position: 'absolute',
//                 marginLeft: 80, // Adjust this value to move the circle towards the right
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: 120,
//                 borderColor: 'white',
//                 width: 240,
//                 height: 240,
//                 borderRadius: 240 / 2,
//                 borderWidth: 30,
//               }}>
//               <Image
//                 source={{ uri: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` }}
//                 style={{ width: 200, height: 100, borderColor: 'black', borderRadius: 1 }}
//               />
//               <Text style={{ backgroundColor: 'white', color: 'black', fontSize: 40 }}> {data.list[0].main.temp} °C</Text>
//             </View>

//             {/* <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
//               <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
//                 temperature:{data.list[0].main.temp}
//               </Text>
//               <Text style={{fontSize: 22, color: 'white', textAlign:"center"}}>
//                textAlignVerticalmain: {data.list[0].weather[0].Icon}
//               </Text>
//             </View> */}
//             {/* 
//             <Text style={{color: 'white', fontSize: 64}}>
//               {(data['main']['temp'] - 273).toFixed(2)}&deg; C
//             </Text> */}

//             <View style={{ flex: 1, bottom: -300 }}>
             
//                   <View style={{ flex: 1,  alignItems: 'center', margin: 10 }}>
//                     <View>
//                       <Text style={{ fontSize: 18, color: 'white' }}>
//                        Temperature :  {data.list[0].main.temp}
//                       </Text>
//                     </View>
//                     <View>
//                       <Text style={{ fontSize: 18, color: 'white' }}>
//                        Humidity  :  {data.list[0].main.humidity}
//                       </Text>
//                     </View>

//                     <View>
//                       <Text style={{ fontSize: 18, color: 'white' }}>
//                        Pressure :  {data.list[0].main.pressure}
//                       </Text>
//                     </View>

//                     <View>
//                       <Text style={{ fontSize: 18, color: 'white' }}>
//                       Description  :  {data.list[0].weather[0].description}
//                       </Text>
//                     </View>

//                   </View>
               


//             </View>
//           </View>

//         ) :
//           <View>
//             <Text style={{fontSize:25,alignItems:'center',justifyContent:'center'}}>Loding.....</Text>
//           </View>
//         }
//       </View>
//     </View>
//   );
// }






