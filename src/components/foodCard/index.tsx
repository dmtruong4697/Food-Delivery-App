import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface IProps {
    id: string;
    imageUri: ImageSourcePropType;
    name: string;
    price: number;
    rating: number;
    isFavorite: boolean;
}

const FoodCard: React.FC<IProps> = ({id, imageUri, name, price, rating, isFavorite}) => {

  return (
    <View style={styles.viewContainer}>
        <View style={styles.viewImage}>
            <Image style={styles.imgImage} source={imageUri}/>
        </View>

        <View style={styles.viewContent}>
            <View style={{flex: 1,}}>
            <Text style={styles.txtName}>{name}</Text>

            <View style={styles.viewInfo}>
                <Text style={styles.txtPrice}>$ {price}</Text>
                <View style={styles.viewRating}>
                    <Image style={styles.imgRating} source={require('../../../assets/icon/star.png')}/>
                    <Text style={styles.txtRating}>{rating}</Text>
                </View>
            </View>
            </View>

            <View style={styles.viewButtonGroup}>
                <TouchableOpacity
                    style={styles.btnHeart}
                >
                    <Image style={styles.imgHeart} source={require('../../../assets/icon/heart.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCart}
                >
                    <Image style={styles.imgCart} source={require('../../../assets/icon/cart2.png')}/>
                </TouchableOpacity>
            </View>
        </View>


    </View>
  )
}

export default FoodCard