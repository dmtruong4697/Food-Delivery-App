import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FoodCard from '../../components/FoodCard';
import ProductItem1 from '../../components/ProductItem1';
import FastFoodCard from '../../components/FastFoodCard';

const CategoriesData = [
    {
        id: 1,
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
    {
        id: 2,
        imageUri: require('../../../assets/food/pizza.png'),
        content: 'Pizza',
    },
    {
        id: 3,
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
    {
        id: 4,
        imageUri: require('../../../assets/food/pizza.png'),
        content: 'Pizza',
    },
    {
        id: 5,
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
]

const OpenRestaurantData = [
    {
        id: 1,
        imageUri: require('../../../assets/food/burger.png'),
        productName: "Cheese burgers",
        price: 8.09,
        rating: 4.2,
        isFavorite: false,
    },
    {
        id: 2,
        imageUri: require('../../../assets/food/pizza.png'),
        productName: "Pizza",
        price: 12.5,
        rating: 4.6,
        isFavorite: false,
    },
    {
        id: 3,
        imageUri: require('../../../assets/food/burger.png'),
        productName: "Cheese burgers",
        price: 8.09,
        rating: 4.2,
        isFavorite: false,
    },
]

const PopularFastFoodData = [
    {
        id: 1,
        title: 'European Pizza',
        content: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png')
    },
    {
        id: 2,
        title: 'European Pizza',
        content: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png')
    },
    {
        id: 3,
        title: 'European Pizza',
        content: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png')
    },
]

const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
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
        >
            <Image style={{height: 16, width: 14,}} source={require('../../../assets/icon/menu.png')}/>
        </TouchableOpacity>

        <View
            style={{
                flex: 1,
                flexDirection: 'column', 
                height: '100%',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
            }}
        >
            <Text style={{fontSize: 12, fontWeight: '700', color: '#FC6E2A',}}>DELIVER TO</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#676767',}}>Los Angeles, USA ▼</Text>
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
            onPress={() => {navigation.navigate({name: "MyCart"})}}
        >
            <Image style={{height: 20, width: 18,}} source={require('../../../assets/icon/cart.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}>
        
        <Text style={{fontSize: 16, fontWeight: '400', color: '#1A1817', alignSelf: 'flex-start',}}>
            Hey Septa, {""}
            <Text style={{fontWeight: '700'}}>Good Afternoon!</Text>
        </Text>

        <TouchableOpacity 
            style={styles.searchField}
            onPress={() => {
                navigation.navigate({name: "Search"})
            }}
        >
            <Image style={{width: 24, height: 24,}} source={require('../../../assets/icon/search.png')}/>
            <TextInput
                style={{
                    height: '100%',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#676767',
                    marginLeft: 5,
                }}
                placeholder='What will you like to eat?'
                readOnly
            />
        </TouchableOpacity>
      </View>

      <View style={styles.allCategories}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 27,
                    width: '100%',
                    marginBottom: 5,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>All Categories</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#333333', marginRight: 5,}}>See all</Text>
                    <Image style={{width: 5, height: 10,}} source={require('../../../assets/icon/arrowRight.png')}/>
                </TouchableOpacity>
            </View>

            <FlatList
                nestedScrollEnabled
                data={CategoriesData}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ProductItem1 content={item.content} imageUri={item.imageUri}/>
                )}
                contentContainerStyle={{height: 70, alignItems: 'center',}}
            />

      </View>

      <View style={styles.openRestaurants}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 27,
                    width: '100%',
                    marginBottom: 5,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Open Restaurants</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#333333', marginRight: 5,}}>See all</Text>
                    <Image style={{width: 5, height: 10,}} source={require('../../../assets/icon/arrowRight.png')}/>
                </TouchableOpacity>
            </View>

            <FlatList
                nestedScrollEnabled
                data={OpenRestaurantData}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FoodCard detail={item}/>
                )}
                contentContainerStyle={{height: 150,}}
            />

      </View>

      <View style={styles.popularFastFood}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 27,
                    width: '100%',
                    marginBottom: 5,
                }}
            >
                <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Popular Fast Food</Text>
            </View>

            <FlatList
                nestedScrollEnabled
                data={PopularFastFoodData}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FastFoodCard detail={item}/>
                )}
                contentContainerStyle={{height: 160, alignItems: 'center',}}
            />

      </View>


    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },

    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 20,
    },

    searchView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '97%',
        marginTop: 20,
    },

    searchField: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: 350,
        height: 62,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginTop: 10,
    },

    allCategories: {
        alignItems: 'center',
        height: 105,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 15,
    },

    openRestaurants: {
        alignItems: 'center',
        height: 150,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 20,
    },

    popularFastFood: {
        alignItems: 'center',
        height: 200,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 20,
    },
})