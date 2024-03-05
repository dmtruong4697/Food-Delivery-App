import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FastFoodCard = (props) => {

    const {detail} = props;
  return (
    <View style={styles.container}>
      <Image style={{height: 90, width: 90}} source={detail.imageUri}/>

      <View style={styles.contentView}>
        <Text style={{fontSize: 15, fontWeight: '700', color: '#32343E',}}>{detail.title}</Text>
        <Text style={{fontSize: 13, fontWeight: '400', color: '#646982',}}>{detail.content}</Text>
      </View>
    </View>
  )
}

export default FastFoodCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 152,
        width: 166,
        marginRight: 10,
        padding: 10,
        flexDirection: 'column',
        borderRadius: 20,
    },
    contentView: {
        width: '100%',
    },
})