import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import FoodCard from '../../components/FoodCard';
import ProductItem1 from '../../components/ProductItem1';
import FastFoodCard from '../../components/FastFoodCard';
import { styles } from './styles';
import Modal from "react-native-modal";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../../components/button';
import { CartStore } from '../../mobx/CartStore';

type CategoryType = {
    id: string;
    imageUri: ImageSourcePropType;
    content: string;
}

type RestaurantType = {
    id: string,
    imageUri: ImageSourcePropType,
    productName: string,
    price: number,
    rating: number,
    isFavorite: boolean,
}

type FoodType = {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    restaurantName: string;
    price: number;
}

const CategoriesData: CategoryType[] = [
    {
        id: '1',
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
    {
        id: '2',
        imageUri: require('../../../assets/food/pizza.png'),
        content: 'Pizza',
    },
    {
        id: '3',
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
    {
        id: '4',
        imageUri: require('../../../assets/food/pizza.png'),
        content: 'Pizza',
    },
    {
        id: '5',
        imageUri: require('../../../assets/food/burger.png'),
        content: 'Burger',
    },
]

const OpenRestaurantData: RestaurantType[] = [
    {
        id: '1',
        imageUri: require('../../../assets/food/burger.png'),
        productName: "Cheese burgers",
        price: 8.09,
        rating: 4.2,
        isFavorite: false,
    },
    {
        id: '2',
        imageUri: require('../../../assets/food/pizza.png'),
        productName: "Pizza",
        price: 12.5,
        rating: 4.6,
        isFavorite: false,
    },
    {
        id: '3',
        imageUri: require('../../../assets/food/burger.png'),
        productName: "Cheese burgers",
        price: 8.09,
        rating: 4.2,
        isFavorite: false,
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

const HomeScreen: FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowModal, setIsShowModal] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.headerView}>
        <TouchableOpacity
            style={styles.btnProfile}
            onPress={() => {navigation.navigate('MenuProfile')}}
        >
            <Image style={{height: 16, width: 14,}} source={require('../../../assets/icon/menu.png')}/>
        </TouchableOpacity>

        <View
            style={styles.viewTitle}
        >
            <Text style={{fontSize: 12, fontWeight: '700', color: '#FC6E2A',}}>DELIVER TO</Text>
            <TouchableOpacity
                onPress={() => {setIsShowModal(true)}}
            >
                <Text style={{fontSize: 14, fontWeight: '400', color: '#676767',}}>Los Angeles, USA ▼</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={styles.btnCart}
            onPress={() => {navigation.navigate('MyCart')}}
        >
            <Image style={styles.imgButtonCart} source={require('../../../assets/icon/cart.png')}/>
            <Text style={{color: 'white'}}>{CartStore.getQuantity()}</Text>
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
                navigation.navigate('Search')
            }}
        >
            <Image style={{width: 24, height: 24,}} source={require('../../../assets/icon/search.png')}/>
            <TextInput
                style={styles.viewInputField}
                placeholder='What will you like to eat?'
                readOnly
            />
        </TouchableOpacity>
      </View>

      <View style={styles.allCategories}>
            <View
                style={styles.viewCategoriesHeader}
            >
                <Text style={styles.txtCategoriesTitle}>All Categories</Text>
                <TouchableOpacity
                    style={styles.btnSeeAll}
                >
                    <Text style={styles.txtSeeAll}>See all</Text>
                    <Image style={styles.imgButtonSeeAll} source={require('../../../assets/icon/arrowRight.png')}/>
                </TouchableOpacity>
            </View>

            <FlatList
                nestedScrollEnabled
                data={CategoriesData}
                horizontal={true}
                // keyExtractor={(item) => item.id}
                renderItem={({item}: {item: CategoryType}) => (
                    <ProductItem1 content={item.content} imageUri={item.imageUri}/>
                )}
                contentContainerStyle={{height: 70, alignItems: 'center',}}
            />

      </View>

      <View style={styles.openRestaurants}>
            <View
                style={styles.viewCategoriesHeader}
            >
                <Text style={styles.txtCategoriesTitle}>Open Restaurants</Text>
                <TouchableOpacity
                    style={styles.btnSeeAll}
                >
                    <Text style={styles.txtSeeAll}>See all</Text>
                    <Image style={styles.imgButtonSeeAll} source={require('../../../assets/icon/arrowRight.png')}/>
                </TouchableOpacity>
            </View>

            <FlatList
                nestedScrollEnabled
                data={OpenRestaurantData}
                horizontal={true}
                // keyExtractor={item => item.id}
                renderItem={({item}: {item: RestaurantType}) => (
                    <FoodCard detail={item}/>
                )}
                contentContainerStyle={{height: 150,}}
            />

      </View>

      <View style={styles.popularFastFood}>
            <View
                style={styles.viewCategoriesHeader}
            >
                <Text style={styles.txtCategoriesTitle}>Popular Fast Food</Text>
            </View>

            <FlatList
                nestedScrollEnabled
                data={PopularFastFoodData}
                horizontal={true}
                // keyExtractor={item => item.id}
                renderItem={({item}: {item: FoodType}) => {
                    return (<FastFoodCard detail={item}/>)
                    
                }}
                contentContainerStyle={{height: 160, alignItems: 'center', gap: 10,}}
            />

      </View>

        <Modal
            isVisible={isShowModal}
            // style={styles.modalContainer}
            onBackdropPress={() => {setIsShowModal(false)}}
            backdropOpacity={0.5}
            
        >
            <View style={styles.viewModalContainer}>
                <TouchableOpacity
                    style={styles.btnCloseModal}
                    onPress={() => {setIsShowModal(false)}}
                >
                    <Image style={{height: 16, width: 14,}} source={require('../../../assets/icon/close.png')}/>
                </TouchableOpacity>

                <Text style={styles.txtTitle}>Hurry Offers!</Text>
                <Text style={styles.txtCode}>#1243CD2</Text>
                <Text style={styles.txtDescription}>Use the cupon get 25% discount</Text>

                <TouchableOpacity
                    style={styles.btnGotIt}
                    onPress={() => {setIsShowModal(false)}}
                >
                    <Text style={styles.txtDescription}>GOT IT</Text>
                </TouchableOpacity>
            </View>
        </Modal>


    </ScrollView>
  )
}

export default HomeScreen