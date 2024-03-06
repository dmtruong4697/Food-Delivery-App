import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/welcomeScreen';
import SignInScreen from '../screens/signInScreen';
import HomeScreen from '../screens/homeScreen';
import CartScreen from '../screens/cartScreen';
import searchScreen from '../screens/searchScreen';
import FoodScreen from '../screens/foodScreen';
import FoodDetailScreen from '../screens/foodDetailScreen';
import RestaurantDetailScreen from '../screens/restaurantDetailScreen';

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
            component={CartScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Search" 
            component={searchScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Food" 
            component={FoodScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="FoodDetail" 
            component={FoodDetailScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="RestaurantDetail" 
            component={RestaurantDetailScreen}
            options={{
                headerShown: false,
            }}  
        />
      </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})