import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface IProps {
    id: string;
    name: string;
    imageUri: ImageSourcePropType;
    rating: number;
}

const SuggestedRestaurantCard: React.FC<IProps> = ({id, imageUri, name, rating}) => {

  return (
    <TouchableOpacity style={styles.viewContainer}>
      
      <View style={styles.viewImage}>
        <Image style={styles.viewImage} source={imageUri}/>
      </View>

      <View style={styles.viewContent}>
        <Text style={styles.txtName}>{name}</Text>
        <View style={styles.viewRating}>
            <Image style={styles.imgRating} source={require('../../../assets/icon/star1.png')}/>
            <Text style={styles.txtRating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SuggestedRestaurantCard