import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { styles } from './styles';
import Modal from "react-native-modal";
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../../components/button';
import { CartStore } from '../../mobx/CartStore';
import FastFoodCard from '../../components/fastFoodCard';
import FoodCard from '../../components/foodCard';
import CategoryCard from '../../components/categoryCard';
import { observer } from "mobx-react-lite"
import { getFoodData } from '../../firebase/services/FoodService';
import { getRestaurantData } from '../../firebase/services/RestaurantService';

type CategoryType = {
    id: string;
    imageUri: ImageSourcePropType;
    name: string;
    onPress: () => void;
}

type RestaurantType = {
    id: string;
    name: string;
    description: string,
    imageUri: string;
    rating: number;
}

type FoodType = {
    id: string;
    type: string,
    name: string;
    imageUri: string;
    restaurantName: string;
    restaurantId: string,
    price: number;
}

const CategoriesData: CategoryType[] = [
    {
        id: '1',
        imageUri: require('../../../assets/food/burger.png'),
        name: 'Burger',
        onPress: () => {console.log('burger')},
    },
    {
        id: '2',
        imageUri: require('../../../assets/food/pizza.png'),
        name: 'Pizza',
        onPress: () => {console.log('pizza')},
    },
    {
        id: '3',
        imageUri: require('../../../assets/food/burger.png'),
        name: 'Burger',
        onPress: () => {console.log('burger')},
    },
    {
        id: '4',
        imageUri: require('../../../assets/food/pizza.png'),
        name: 'Pizza',
        onPress: () => {console.log('pizza')},
    },
    {
        id: '5',
        imageUri: require('../../../assets/food/burger.png'),
        name: 'Burger',
        onPress: () => {console.log('burger')},
    },
]

const HomeScreen: FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowModal, setIsShowModal] = useState(false);

    const [foodData, setFoodData] = useState<FoodType[]>([]);
    const [restaurantData, setRestaurantData] = useState<RestaurantType[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const foodData = await getFoodData();
          const restaurantData = await getRestaurantData();
          setFoodData(foodData);
          setRestaurantData(restaurantData);
        } catch (error) {
          console.error('Error fetching food data:', error);
        }
      };
  
      fetchData();
    }, []);

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
            {(CartStore.getQuantity() > 0) && 
                <View style={styles.viewCartQuantity}>
                    <Text style={{color: 'white'}}>{CartStore.getQuantity()}</Text>
                </View>
            }
            <Image style={styles.imgButtonCart} source={require('../../../assets/icon/cart.png')}/>
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
                    <CategoryCard
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        onPress={() => {navigation.navigate('Food', {
                            detail: {
                                type: item.name,
                            },
                        })}}
                    />
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
                data={restaurantData}
                horizontal={true}
                // keyExtractor={item => item.id}
                renderItem={({item}: {item: RestaurantType}) => (
                    <FoodCard
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        rating={item.rating}
                        description={item.description}
                    />
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
                data={foodData}
                horizontal={true}
                // keyExtractor={item => item.id}
                renderItem={({item}: {item: FoodType}) => (
                    <FastFoodCard 
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        price={item.price}
                        restaurantName={item.restaurantName}
                        restaurantId={item.restaurantId}
                        type={item.type}
                    />
                )}
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

export default observer(HomeScreen)