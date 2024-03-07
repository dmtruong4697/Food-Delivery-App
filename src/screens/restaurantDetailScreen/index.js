import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import FoodDetailCart from '../../components/FoodDetailCart'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";

const DishTypeData = [
    {
        id: 1,
        name: 'Burger',
        list: [
            {
                id: 1,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Burger Bistro nnn',
                restaurantName: 'Rose Garden',
                price: '40',
            },
            {
                id: 2,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Smokin Burger',
                restaurantName: 'Rose Garden',
                price: '60',
            },
            {
                id: 3,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Burger Bistro',
                restaurantName: 'Rose Garden',
                price: '40',
            },
            {
                id: 4    ,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Smokin Burger',
                restaurantName: 'Rose Garden',
                price: '60',
            },
        ],
    },
    {
        id: 2,
        name: 'Sandwich',
        list: [
            {
                id: 1,
                imageUri: require('../../../assets/food/pizza.png'),
                name: 'Bistro',
                restaurantName: 'Rose Garden',
                price: '40',
            },
            {
                id: 2,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Smokin Burger',
                restaurantName: 'Rose Garden',
                price: '60',
            },
        ],
    },
    {
        id: 3,
        name: 'Rice',
        list: [
            {
                id: 1,
                imageUri: require('../../../assets/food/pizza.png'),
                name: 'Bistro',
                restaurantName: 'Rose Garden',
                price: '40',
            },
            {
                id: 2,
                imageUri: require('../../../assets/food/burger1.png'),
                name: 'Smokin Burger',
                restaurantName: 'Rose Garden',
                price: '60',
            },
            {
                id: 3,
                imageUri: require('../../../assets/food/pizza.png'),
                name: 'Burger Bistro',
                restaurantName: 'Rose Garden',
                price: '40',
            },
        ],
    },
    {
        id: 4,
        name: 'Chicken',
    },
    {
        id: 5,
        name: 'Rice',
    },
    {
        id: 6,
        name: 'Chicken',
    },
]

const FilterData = [
    {
        id: 1,
        name: 'OFFERS',
        list: [
            {
                id: 1,
                name: 'Delivery',
            },
            {
                id: 2,
                name: 'Pick Up',
            },
            {
                id: 3,
                name: 'Offer',
            },
            {
                id: 4,
                name: 'Online payment avaiable',
            },
        ]
    },

    {
        id: 2,
        name: 'DELIVER TIME',
        list: [
            {
                id: 1,
                name: 'Delivery',
            },
            {
                id: 2,
                name: 'Pick Up',
            },
            {
                id: 3,
                name: 'Offer',
            },
            {
                id: 4,
                name: 'Online payment avaiable',
            },
        ]
    },
]

const RestaurantDetailScreen = () => {

    const navigation = useNavigation();
    const [dishIndex, setDishIndex] = useState(1);
    const [isShowModal, setIsShowModal] = useState(false);
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
      });

  return (
    <ScrollView 
        contentContainerStyle={styles.viewContainer}
        onLayout={(event) => setLayout(event.nativeEvent.layout)}
    >
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Restaurant View</Text>
        </View>

        <TouchableOpacity
            style={styles.btnOption}
            onPress={() => {setIsShowModal(true)}}
        >
            <Image style={styles.imgButtonOption} source={require('../../../assets/icon/option.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCover}>
        <Image style={styles.imgCover} source={require('../../../assets/image/chicken.png')}/>
      </View>

        <View style={styles.viewContent}>
            <Text style={styles.txtName}>Spicy restaurant</Text>
            <Text style={styles.txtDescription}>Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</Text>

            <View style={styles.viewInfo}>
                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgRating} source={require('../../../assets/icon/star2.png')}/>
                    <Text style={styles.txtRating}>4.7</Text>
                </View>

                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgShipping} source={require('../../../assets/icon/shipping.png')}/>
                    <Text style={styles.txtShipping}>Free</Text>
                </View>

                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgTime} source={require('../../../assets/icon/time.png')}/>
                    <Text style={styles.txtTime}>20 min</Text>
                </View>
            </View>
        </View>

        <View style={styles.viewDishName}>
            <FlatList
                nestedScrollEnabled
                data={DishTypeData}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={[styles.btnDish, {
                            backgroundColor: (item.id == dishIndex)? '#F58D1D':null,
                            borderWidth: (item.id == dishIndex)? 0:2,
                            borderColor: (item.id == dishIndex)? null:'#EDEDED',
                        }]}
                        onPress={() => {setDishIndex(item.id)}}
                    >
                        <Text style={[styles.txtButtonDish, {color: (item.id == dishIndex)? '#FFFFFF':'#181C2E'}]}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                // contentContainerStyle={{width: '100%',}}
            />
        </View>

        <View style={styles.viewDish}>
            <View style={styles.viewDishTitle}>
                <Text style={styles.txtDishTitle}>{DishTypeData[dishIndex-1].name}</Text>
            </View>

            <FlatList
                // key={dishIndex.toString()}
                //nestedScrollEnabled
                data={DishTypeData[dishIndex-1].list}
                extraData={(dishIndex)}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FoodDetailCart detail={item}/>
                )}
                contentContainerStyle={{flex: 1, width: layout.width,  gap: 10, alignItems: 'center',}}
                columnWrapperStyle={{gap: 20}}
            />

        </View>

        <Modal
            isVisible={isShowModal}
            style={styles.modalContainer}
            onBackdropPress={() => {setIsShowModal(false)}}
            backdropOpacity={0.5}
            
        >
            <View style={styles.viewModalHeader}>
                <Text style={styles.txtModalHeader}>Filter your search</Text>

                <TouchableOpacity
                    style={styles.btnClose}
                    onPress={() => {setIsShowModal(false)}}
                >
                    <Image style={styles.imgButtonClose} source={require('../../../assets/icon/cancel.png')}/>
                </TouchableOpacity>
            </View>
        </Modal>
    </ScrollView>
  )
}

export default RestaurantDetailScreen