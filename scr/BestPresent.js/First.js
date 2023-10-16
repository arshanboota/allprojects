import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function First(props) {
    const [city, setCity] = useState('');
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    return (
        <LinearGradient
            colors={['#8698FD', '#E7BDE5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/gift.png')}
                style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end' }}>
                <View style={{ flex: 1, padding: 20 }}>
                    
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('HomeScreen2');
                            }}>
                            <Icon name="search" size={26} color="white" />
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: 35, fontWeight: '600', marginVertical: 60, marginTop: 10 ,color:'white'}}>
                        Find your best{'\n'}gift
                    </Text>

                    <Text style={{ fontSize: 25, marginVertical: 20, fontWeight: '600' ,color:'white'}}>
                        Popular Tags
                    </Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', flexWrap: 'wrap', flex: 1 }}>

                        {[
                            { id: '1', text: 'Birthday' },
                            { id: '2', text: 'Eid' },
                            { id: '3', text: 'Thankgiving' },
                            { id: '4', text: 'Christmas' },
                            { id: '5', text: 'Anniversary' },
                            { id: '6', text: 'NewYear' },
                            { id: '7', text: 'LabourDay' },
                            { id: '8', text: 'Independence' },
                            { id: '9', text: 'Valentine' },

                        ].map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    backgroundColor: 'white',
                                    padding: 5,
                                    margin: 5,
                                    borderRadius: 35,
                                    width: `${110 / 4}%`,
                                    alignItems: 'center'
                                }}
                                onPress={() => props.navigation.navigate('Collections', { event: item.text })}
                            >
                                <Text style={{ color: 'black' }}>{item.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                </View>

            </ImageBackground>
        </LinearGradient>
    );
    const styles = StyleSheet.create({

        button: {
            backgroundColor: 'white',
            padding: 15,
            margin: 10,
            borderRadius: 35,
            width: '40%',
            alignItems: 'center'
        },
    });

}
