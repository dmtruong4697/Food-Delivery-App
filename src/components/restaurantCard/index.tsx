import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface IProps {
  imageUri: ImageSourcePropType,
  name: string,
  description: string,
  rating: string,
  shipping: string,
  time: string,
}

const RestaurantCard: React.FC<IProps> = ({description, imageUri, name, rating, shipping, time}) => {

  return (
    <TouchableOpacity style={styles.viewContainer}>
      
      <Image style={styles.imgCover} source={imageUri}/>

      <View style={styles.viewContent}>
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtDescription}>{description}</Text>

        <View style={styles.viewInfo}>
            <View style={styles.viewInfoItem}>
                <Image style={styles.imgRating} source={require('../../../assets/icon/star2.png')}/>
                <Text style={styles.txtRating}>{rating}</Text>
            </View>

            <View style={styles.viewInfoItem}>
                <Image style={styles.imgShipping} source={require('../../../assets/icon/shipping.png')}/>
                <Text style={styles.txtShipping}>{shipping}</Text>
            </View>

            <View style={styles.viewInfoItem}>
                <Image style={styles.imgTime} source={require('../../../assets/icon/time.png')}/>
                <Text style={styles.txtTime}>{time}</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
