import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FastFoodCard = (props) => {

    const {detail} = props;
    const navigation = useNavigation();

  return (
    <View style={styles.shadowView}>
    <TouchableOpacity 
      style={styles.container}
      onPress={() => {navigation.navigate({name: "Food"})}}
    >
      <Image style={{height: 90, width: 90}} source={detail.imageUri}/>

      <View style={styles.contentView}>
        <Text style={{fontSize: 15, fontWeight: '700', color: '#32343E',}}>{detail.title}</Text>
        <Text style={{fontSize: 13, fontWeight: '400', color: '#646982',}}>{detail.content}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default FastFoodCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 152,
        width: 166,
        //marginRight: 10,
        padding: 10,
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden',   
        backgroundColor: "#ffffff"  
    },

    shadowView: {
      borderRadius: 20,
      backgroundColor: 'transparent',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.15,
      shadowRadius: 1.00,
      elevation: 2,
    },

    contentView: {
        width: '100%',
    },
})