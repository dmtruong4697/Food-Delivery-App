import { Image, ImageSourcePropType, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    id: string;
    name: string;
    imageUri: string;
    restaurantName: string;
    price: number;
    onPressAdd: () => void;
}

const FoodDetailCard: React.FC<IProps> = ({id, imageUri, name, price, restaurantName, onPressAdd}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity 
        style={styles.viewContainer}
        onPress={() => {navigation.navigate('FoodDetail', 
        {
            detail: {
                id: id,
                imageUri: imageUri,
                name: name,
                price: price,
                restaurantName: restaurantName,
            },
        })}}
    >
        
        <View style={styles.imgImage}>
            <Image style={styles.imgImage} source={imageUri}/>
        </View>

        <View style={styles.viewContentShadow}>
            <View style={styles.viewContent}>
                <Text style={styles.txtName}>{name}</Text>
                <Text style={styles.txtRestaurantName}>{restaurantName}</Text>
                <View style={styles.viewOption}>
                    <Text style={styles.txtPrice}>${price}</Text>
                    <TouchableOpacity
                        style={styles.btnAdd}
                        onPress={onPressAdd}
                    >
                        <Image style={styles.imgAdd} source={require('../../../assets/icon/plus.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default FoodDetailCard