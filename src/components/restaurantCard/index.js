import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const RestaurantCard = (props) => {

    const {detail} = props;

  return (
    <TouchableOpacity style={styles.viewContainer}>
      
      <Image style={styles.imgCover} source={detail.imageUri}/>

      <View style={styles.viewContent}>
        <Text style={styles.txtName}>{detail.name}</Text>
        <Text style={styles.txtDescription}>{detail.description}</Text>

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
    </TouchableOpacity>
  )
}

export default RestaurantCard
