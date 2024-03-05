import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductItem1 = (props) => {

    const {imageUri, content} = props;

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {
            
        }}
    >
        <View 
            style={{
                height: 44,
                width: 44,
                backgroundColor: '#F0ECE9',
                borderRadius: 1000,
                marginRight: 5,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image style={{width: 40, height: 40,}} source={imageUri}/>
        </View>

        <Text style={{fontSize: 13, fontWeight: '700', color: '#32343E', marginRight: 5,}}>{content}</Text>
    </TouchableOpacity>
  )
}

export default ProductItem1

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        maxWidth: 150,
        borderRadius: 39,  
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
})