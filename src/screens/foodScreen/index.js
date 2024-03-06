import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import FoodDetailCart from '../../components/FoodDetailCart';
import { styles } from './style';
import RestaurantCard from '../../components/restaurantCard';

const FoodData = [
    {
        id: 1,
        name: 'Burger Bistro',
        restaurantName: 'Rose garden',
        price: '40',
    },
    {
        id: 2,
        name: 'Burger Bistro',
        restaurantName: 'Rose garden',
        price: '40',
    },
    {
        id: 3,
        name: 'Burger Bistro',
        restaurantName: 'Rose garden',
        price: '40',
    },
    {
        id: 4,
        name: 'Burger Bistro',
        restaurantName: 'Rose garden',
        price: '40',
    },
]

const RestaurantData = [
    {
        id: 1,
        imageUri: require('../../../assets/image/restaurant.png'),
        name: 'Rose Garden Restaurant',
        description: 'Burger - Chicken - Wings',
        rating: '4.7',
        shipping: 'Free',
        time: '20 min',
    },
    {
        id: 2 ,
        imageUri: require('../../../assets/image/restaurant.png'),
        name: 'Rose Garden Restaurant',
        description: 'Burger - Chicken - Wings',
        rating: '4.7',
        shipping: 'Free',
        time: '20 min',
    },
]

const FoodScreen = () => {

    const navigation = useNavigation();
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
      });

  return (
    <ScrollView
        contentContainerStyle={styles.container}
        onLayout={(event) => setLayout(event.nativeEvent.layout)}
    >

      <View style={styles.headerView}>
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: 45,
                backgroundColor: '#ECF0F4',
                borderRadius: 1000,
            }}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={{height: 12, width: 6,}} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View
            style={{
                flex: 1,
                //flexDirection: 'column', 
                justifyContent: 'center',
                height: '100%',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
            }}
        >
            <TouchableOpacity
                style={{
                    height: 45,
                    width: 102,
                    borderWidth: 1,
                    borderColor: '#ECF0F4',
                    borderRadius: 1000,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{fontSize: 12, fontWeight: '700', color: '#181C2E',}}>
                    BURGER
                    <Text style={{color: '#F58D1D',}}>▼</Text>
                </Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: 45,
                backgroundColor: '#181C2E',
                borderRadius: 1000,
            }}
            onPress={() => {navigation.navigate({name: "Search"})}}
        >
            <Image style={{height: 15, width: 15,}} source={require('../../../assets/icon/search2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: 45,
                backgroundColor: '#ECF0F4',
                borderRadius: 1000,
                marginLeft: 5,
            }}
        >
            <Image style={{height: 18, width: 22,}} source={require('../../../assets/icon/filter.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.popularBurger}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 27,
                    width: '100%',
                    marginBottom: 20,
                    marginLeft: 20,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Popular Burger</Text>
            </View>

            <FlatList
            key={'#'}
                nestedScrollEnabled
                data={FoodData}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FoodDetailCart detail={item}/>
                )}
                contentContainerStyle={{flex: 1, width: layout.width, gap: 10, alignItems: 'center',}}
                columnWrapperStyle={{gap: 20}}
            />

      </View>

      <View style={styles.popularBurger}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 27,
                    width: '100%',
                    marginBottom: 20,
                    marginLeft: 20,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Open Restaurants</Text>
            </View>

            <FlatList
                nestedScrollEnabled
                data={RestaurantData}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <RestaurantCard detail={item}/>
                )}
                contentContainerStyle={{alignItems: 'center', width: '100%',}}
            />

      </View>


    </ScrollView>
  )
}

export default FoodScreen