import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import Button from '../../components/button';

const sizeData = [
    {
        id: 1,
        size: 10,
    },
    {
        id: 2,
        size: 14,
    },
    {
        id: 3,
        size: 16,
    }
]

const FoodDetailScreen = () => {

    const navigation = useNavigation();
    const [sizeIndex, setSizeIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [isShowModal, setIsShowModal] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>

      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Details</Text>
        </View>

        {/* <TouchableOpacity
            style={styles.btnOption}
        >
            <Image style={styles.imgButtonOption} source={require('../../../assets/icon/option.png')}/>
        </TouchableOpacity> */}
      </View>

      <ImageBackground 
        style={styles.viewCover}
        source={require('../../../assets/image/chicken.png')}
        imageStyle={styles.imgCover}
      >
        <TouchableOpacity style={styles.btnCover}>
            <Image style={styles.imgButtonCover} source={require('../../../assets/icon/heart1.png')}/>
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity 
        style={styles.btnRestaurant}
        onPress={() => {navigation.navigate({name: "RestaurantDetail"})}}
      >
        <Image style={styles.imgRestaurantButton} source={require('../../../assets/food/burger.png')}/>
        <Text style={styles.txtRestaurantButton}>Uttora Coffe House</Text>
      </TouchableOpacity>

        <View style={styles.viewContent}>
            <Text style={styles.txtName}>Chicken & Chips</Text>
            <Text style={styles.txtDescription}>Prosciutto e funghi is a pizza variety that is topped with tomato sauce.</Text>

            <View style={styles.viewInfo}>
                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgRating} source={require('../../../assets/icon/star2.png')}/>
                    <Text style={styles.txtRating}>4.7</Text>
                </View>

                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgShipping} source={require('../../../assets/icon/shipping.png')}/>
                    <Text style={styles.txtShipping}>4.7</Text>
                </View>

                <View style={styles.viewInfoItem}>
                    <Image style={styles.imgTime} source={require('../../../assets/icon/time.png')}/>
                    <Text style={styles.txtTime}>4.7</Text>
                </View>
            </View>
        </View>

        <View style={styles.viewSize}>
            <Text style={styles.txtSize}>SIZE:</Text>
            <FlatList
                nestedScrollEnabled
                data={sizeData}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={[styles.btnSize, {backgroundColor: (item.id == sizeIndex)? '#F58D1D':'#F0F5FA'}]}
                        onPress={() => {
                            setSizeIndex(item.id);
                            setIsShowModal(true);
                        }}
                    >
                        <Text style={[styles.txtButtonSize,{color: (item.id == sizeIndex)? '#FFFFFF':'#121223'}]}>{item.size}"</Text>
                    </TouchableOpacity>
                )}
                // contentContainerStyle={{height: 50, alignItems: 'center', width: '100%',}}
            />
        </View>

        <Modal
            isVisible={isShowModal}
            onBackdropPress={() => {setIsShowModal(false)}}
            backdropOpacity={0}
            style={styles.viewModal}
        >
            <View style={styles.viewPrice}>
                <Text style={styles.txtPrice}>$32</Text>
                <View style={styles.viewNumberInput}>
                    <TouchableOpacity
                        style={styles.btnNumberInput}
                        onPress={() => {setQuantity(quantity-1)}}
                    >
                        <Text style={styles.txtNumberInput}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.txtNumberInput}>{quantity}</Text>

                    <TouchableOpacity
                        style={styles.btnNumberInput}
                        onPress={() => {setQuantity(quantity+1)}}
                    >
                        <Text style={styles.txtNumberInput}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Button content={'ADD TO CART'}/>
        </Modal>

    </ScrollView>
  )
}

export default FoodDetailScreen