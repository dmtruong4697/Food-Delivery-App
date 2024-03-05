import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MyCardScreen from '../screens/cart/MyCardScreen';
import SearchScreen from '../screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{
                headerShown: false,
            }} 
        />
        <Stack.Screen 
            name="SignIn" 
            component={SignInScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="MyCart" 
            component={MyCardScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Search" 
            component={SearchScreen}
            options={{
                headerShown: false,
            }}  
        />
      </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})