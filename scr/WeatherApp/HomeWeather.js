import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

export default function HomeWeather(props) {
  const [city, setCity] = useState('');
  return (
    <View style={{flex:1,backgroundColor:'#035972'}}>
     
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
        </View>

        <View style={{ paddingHorizontal: 15, marginTop: 30 }}>
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
              style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => {
              console.log("Navigating to 'Details' screen");
              props.navigation.navigate('Details', { name: city });
            }}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>     
        </View>
      </View>
    </View>
  );
}
















// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// const API_KEY = 'a7eddfe5b4c790307e14c0ed49adf2dc';
// const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
// const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';

// const WeatherApp = () => {
//   const [loading, setLoading] = useState(true);
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchWeatherDataByCity('New York'); // Replace 'New York' with the desired city name
//   }, []);

//   const fetchWeatherDataByCity = async (city) => {
//     try {
//       const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(url);
//       if (!response.ok) {
//         setError('City not found. Please check the spelling and try again.');
//         setLoading(false);
//         return;
//       }
//       const data = await response.json();
//       setWeatherData(data);
//       setLoading(false);
//     } catch (error) {
//       setError('Error fetching weather data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   if (!weatherData) {
//     return null;
//   }

//   const weatherIconUrl = `${WEATHER_ICON_URL}${weatherData.weather[0].icon}@2x.png`;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.location}>{weatherData.name}</Text>
//       <Text style={styles.temperature}>{weatherData.main.temp} °C</Text>
//       <Text style={styles.description}>{weatherData.weather[0].description}</Text>
//       <Image source={{ uri: weatherIconUrl }} style={styles.weatherIcon} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   location: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   temperature: {
//     fontSize: 36,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   weatherIcon: {
//     width: 100,
//     height: 100,
//   },
// });

// export default WeatherApp;
