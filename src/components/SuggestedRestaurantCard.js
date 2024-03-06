import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SuggestedRestaurantCard = (props) => {

    const {detail} = props;

  return (
    <TouchableOpacity style={styles.container}>
      
      <View style={styles.imageView}>
        <Image style={styles.imageView} source={detail.imageUri}/>
      </View>

      <View style={styles.contentView}>
        <Text style={styles.text}>{detail.name}</Text>
        <View style={styles.rating}>
            <Image style={{height: 15, width: 15, marginRight: 5,}} source={require('../../assets/icon/star1.png')}/>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#181C2E'}}>{detail.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SuggestedRestaurantCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '90%',
        height: 64,
        alignSelf: 'auto',
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        marginTop: 10,
    },

    imageView: {
        width: 60,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginRight: 10,
    },

    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#32343E',
    },

    contentView: {
        flexDirection: 'column',
    },

    rating: {
        alignItems: 'center',
        flexDirection: 'row',
    },
})