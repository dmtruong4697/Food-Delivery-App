import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SearchStore } from '../../mobx/SearchStore'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import SuggestedRestaurantCard from '../../components/SuggestedRestaurantCard'
import FastFoodCard from '../../components/FastFoodCard'
import { styles } from './styles'

const RecentKeywordData = [
    {
        id: 1,
        content: "Burger",
    },
    {
        id: 2,
        content: "Sandwich",
    },
    {
        id: 3,
        content: "Pizza",
    },
]

const SuggestedRestaurantData = [
    {
        id: 1,
        imageUri: require('../../../assets/food/rice.png'),
        name: 'Pansi Restaurant',
        rating: '4.7',
    },
    {
        id: 2,
        imageUri: require('../../../assets/food/rice.png'),
        name: 'American Spicy Burger Shop',
        rating: '4.3',
    },
    {
        id: 3,
        imageUri: require('../../../assets/food/rice.png'),
        name: 'Cafenio Coffee Club',
        rating: '4.0' ,
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

const RecentKeyword = (props) => {

    const {detail} = props;
    return (
        <TouchableOpacity 
            style={styles.recentKeyword}
            onPress={() => {SearchStore.setSearchText(detail.content)}}
        >
            <Text style={{fontSize: 16, fontWeight: '400', color: '#181C2E',}}>{detail.content}</Text>
        </TouchableOpacity>
    )
}

const SearchScreen = () => {

    const navigation = useNavigation();
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
            onPress={() => {navigation.navigate({name: "MyCart"})}}
        >
            <Image style={{height: 20, width: 18,}} source={require('../../../assets/icon/cart.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}>

        <View 
            style={styles.searchField}
            onPress={() => {
                navigation.navigate({name: "Search"})
            }}
        >
            <Image style={{width: 24, height: 24,}} source={require('../../../assets/icon/search.png')}/>
            <TextInput
                style={{
                    flex: 1,
                    height: '100%',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#181C2E',
                    marginLeft: 5,
                }}
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
            renderItem={({item}) => (
                <RecentKeyword detail={item}/>
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
                <SuggestedRestaurantCard detail={item}/>
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
                    <FastFoodCard detail={item}/>
                )}
                contentContainerStyle={{height: 160, alignItems: 'center', gap: 10,}}
            />

      </View>

    </ScrollView>
  )
}

export default observer(SearchScreen);