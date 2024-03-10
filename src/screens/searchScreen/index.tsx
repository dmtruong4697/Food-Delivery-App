import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SearchStore } from '../../mobx/SearchStore'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import FastFoodCard from '../../components/fastFoodCard'
import SuggestedRestaurantCard from '../../components/suggestedRestaurantCard'

type RecentKeywordType = {
    id: string;
    content: string;
}

interface IRecentKeyword {
    id: string;
    content: string;
}

type RestaurantType = {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    rating: number;
}

type FoodType = {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    restaurantName: string;
    price: number;
}

const RecentKeywordData: RecentKeywordType[] = [
    {
        id: '1',
        content: "Burger",
    },
    {
        id: '2',
        content: "Sandwich",
    },
    {
        id: '3',
        content: "Pizza",
    },
]

const SuggestedRestaurantData: RestaurantType[] = [
    {
        id: '1',
        imageUri: require('../../../assets/food/rice.png'),
        name: 'Pansi Restaurant',
        rating: 4.7,
    },
    {
        id: '2',
        imageUri: require('../../../assets/food/rice.png'),
        name: 'American Spicy Burger Shop',
        rating: 4.3,
    },
    {
        id: '3',
        imageUri: require('../../../assets/food/rice.png'),
        name: 'Cafenio Coffee Club',
        rating: 4.0,
    },
]

const PopularFastFoodData: FoodType[] = [
    {
        id: '1',
        name: 'European Pizza',
        restaurantName: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png'),
        price: 100,
    },
    {
        id: '2',
        name: 'European Pizza',
        restaurantName: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png'),
        price: 100,
    },
    {
        id: '3',
        name: 'European Pizza',
        restaurantName: 'Peppe Pizzeria',
        imageUri: require('../../../assets/food/pizza.png'),
        price: 100,
    },
]

const RecentKeyword: React.FC<IRecentKeyword> = ({id, content}) => {

    return (
        <TouchableOpacity 
            style={styles.recentKeyword}
            onPress={() => {SearchStore.setSearchText(content)}}
        >
            <Text style={{fontSize: 16, fontWeight: '400', color: '#181C2E',}}>{content}</Text>
        </TouchableOpacity>
    )
}

interface IProps {}

const SearchScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [searchText, setSearchText] = useState("");

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
            <Text style={{fontSize: 20, fontWeight: '500', color: '#1A1817',}}>Search</Text>
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
            onPress={() => {navigation.navigate('MyCart')}}
        >
            <Image style={{height: 20, width: 18,}} source={require('../../../assets/icon/cart.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}>

        <View style={styles.searchField}>
            <Image style={{width: 24, height: 24,}} source={require('../../../assets/icon/search.png')}/>
            <TextInput
                style={styles.inputField}
                placeholder='What will you like to eat?'
                placeholderTextColor={'#979797'}
                onChangeText={(text) => {SearchStore.setSearchText(text)}}
                value={SearchStore.searchText}
            />
            <TouchableOpacity
                onPress={() => {SearchStore.setSearchText("")}}
            >
                <Image style={{width: 20, height: 20,}} source={require('../../../assets/icon/clear.png')}/>
            </TouchableOpacity>
        </View>

      </View>

      <View style={styles.recentKeywordView}>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 27,
                width: '100%',
                marginBottom: 5,
            }}
        >
            <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Recent Keywords</Text>
        </View>

        <FlatList
            nestedScrollEnabled
            data={RecentKeywordData}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item}: {item: RecentKeywordType}) => (
                <RecentKeyword id={item.id} content={item.content}/>
            )}
            contentContainerStyle={{height: 50, alignItems: 'center', width: '100%',}}
        />
      </View>

      <View style={styles.suggestedRestaurant}>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 27,
                width: '100%',
                marginBottom: 5,
            }}
        >
            <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Suggested Restaurants</Text>
        </View>

        <FlatList
            nestedScrollEnabled
            //scrollEnabled={false}
            data={SuggestedRestaurantData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <SuggestedRestaurantCard
                    id={item.id}
                    imageUri={item.imageUri}
                    name={item.name}
                    rating={item.rating}
                />
            )}
            contentContainerStyle={{height: 'auto', width: '100%',}}
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
                    <FastFoodCard
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        price={item.price}
                        restaurantName={item.restaurantName}
                    />
                )}
                contentContainerStyle={{height: 160, alignItems: 'center', gap: 10,}}
            />

      </View>

    </ScrollView>
  )
}

export default observer(SearchScreen);