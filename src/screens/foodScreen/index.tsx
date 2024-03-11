import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from './style';
import RestaurantCard from '../../components/restaurantCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FoodDetailCard from '../../components/foodDetailCard';
import { CartStore } from '../../mobx/CartStore';

type FoodDataType = {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    restaurantName: string;
    price: number;
}

type RestaurantDataType = {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    description: string;
    shipping: string;
    time: string;
    rating: string;
}

const FoodData: FoodDataType[] = [
    {
        id: '1',
        name: 'Burger Bistro',
        imageUri: require('../../../assets/food/burger1.png'),
        restaurantName: 'Rose garden',
        price: 40,
    },
    {
        id: '2',
        name: 'Burger Bistro',
        imageUri: require('../../../assets/food/burger1.png'),
        restaurantName: 'Rose garden',
        price: 40,
    },
    {
        id: '3',
        name: 'Burger Bistro',
        imageUri: require('../../../assets/food/burger1.png'),
        restaurantName: 'Rose garden',
        price: 40,
    },
    {
        id: '4',
        name: 'Burger Bistro',
        imageUri: require('../../../assets/food/burger1.png'),
        restaurantName: 'Rose garden',
        price: 400,
    },
]

const RestaurantData: RestaurantDataType[] = [
    {
        id: '1',
        imageUri: require('../../../assets/image/restaurant.png'),
        name: 'Rose Garden Restaurant',
        description: 'Burger - Chicken - Wings',
        rating: '4.7',
        shipping: 'Free',
        time: '20 min',
    },
    {
        id: '2' ,
        imageUri: require('../../../assets/image/restaurant.png'),
        name: 'Rose Garden Restaurant',
        description: 'Burger - Chicken - Wings',
        rating: '4.7',
        shipping: 'Free',
        time: '20 min',
    },
]

interface IProps {}

const FoodScreen: React.FC<IProps> = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View
            style={styles.viewSelectMenu}
        >
            <TouchableOpacity
                style={styles.btnSelectMenu}
            >
                <Text style={styles.txtSelectMenu}>
                    BURGER
                    <Text style={{color: '#F58D1D',}}>▼</Text>
                </Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={styles.btnSearch}
            onPress={() => {navigation.navigate('Search')}}
        >
            <Image style={styles.imgButtonSearch} source={require('../../../assets/icon/search2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.btnFilter}
        >
            <Image style={styles.imgButtonFilter} source={require('../../../assets/icon/filter.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.popularBurger}>
            <View style={styles.viewTitle}>
                <Text style={styles.txtTitle}>Popular Burger</Text>
            </View>

            <FlatList
            key={'#'}
                nestedScrollEnabled
                data={FoodData}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FoodDetailCard
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        price={item.price}
                        restaurantName={item.restaurantName}
                        onPressAdd={() => {
                            CartStore.addItem({...item, quantity: 1}, 1);
                            console.log(CartStore)
                        }}
                    />
                )}
                contentContainerStyle={{flex: 1, width: layout.width, gap: 10, alignItems: 'center',}}
                columnWrapperStyle={{gap: 20}}
            />

      </View>

      <View style={styles.popularBurger}>
            <View style={styles.viewTitle}>
                <Text style={styles.txtTitle}>Open Restaurants</Text>
            </View>

            <FlatList
                nestedScrollEnabled
                data={RestaurantData}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <RestaurantCard
                        description={item.description}
                        imageUri={item.imageUri}
                        name={item.name}
                        rating={item.rating}
                        shipping={item.shipping}
                        time={item.time}
                    />
                )}
                contentContainerStyle={{alignItems: 'center', width: '100%',}}
            />

      </View>


    </ScrollView>
  )
}

export default FoodScreen