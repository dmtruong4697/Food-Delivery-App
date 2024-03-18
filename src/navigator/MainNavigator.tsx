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
import PaymentScreen from '../screens/paymentScreen';
import AddCardScreen from '../screens/addCardScreen';
import PaymentSuccessfullScreen from '../screens/paymentSuccessfull';
import MyOrderScreen from '../screens/myOrderScreen';
import TrackerScreen from '../screens/trackerScreen';
import MenuProfileScreen from '../screens/menuProfileScreen';
import TrackOrderScreen from '../screens/trackOrderScreen';
import InboxScreen from '../screens/inboxScreen';
import CallScreen from '../screens/callScreen';
import TestScreen from '../screens/testScreen';

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
        <Stack.Screen 
            name="Payment" 
            component={PaymentScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="AddCard" 
            component={AddCardScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="PaymentSuccessfull" 
            component={PaymentSuccessfullScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="MyOrder" 
            component={MyOrderScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Tracker" 
            component={TrackerScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="MenuProfile" 
            component={MenuProfileScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="TrackOrder" 
            component={TrackOrderScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Inbox" 
            component={InboxScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Call" 
            component={CallScreen}
            options={{
                headerShown: false,
            }}  
        />
        <Stack.Screen 
            name="Test" 
            component={TestScreen}
            options={{
                headerShown: false,
            }}  
        />
      </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})