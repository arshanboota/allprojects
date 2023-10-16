
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    GetStarted,
    Home,
    OTPVerification,
    Register,
    ResetPassword,
    SuccessVerification } from './scr/Bloodbank/screens';

import OnboardingStarter from './scr/Bloodbank/screens';

import Login from './scr/Bloodbank/screens';

import BottomTabNavigation from './scr/Bloodbank/navigation/BottomTabNavigation';
const Stack = createNativeStackNavigator();

export default function App() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName={
                //     isFirstLaunch ? 'OnboardingStarter' : 'GetStarted'
                // }
            >
                {/* <Stack.Screen
                    name="OnboardingStarter"
                    component={OnboardingStarter}
                    options={{
                        headerShown: false,
                    }}
                /> */}
                <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation} // Import and provide your BottomTabNavigation component here
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="OTPVerification"
                    component={OTPVerification}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SuccessVerification"
                    component={SuccessVerification}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
