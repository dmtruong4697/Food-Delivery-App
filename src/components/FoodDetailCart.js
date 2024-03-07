import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FoodDetailCart = (props) => {

    const {detail} = props;
    const navigation = useNavigation();

  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={() => {navigation.navigate({name: "FoodDetail"})}}
    >
        
        <View style={styles.imageView}>
            <Image style={styles.imageView} source={detail.imageUri}/>
        </View>

        <View style={styles.contentViewShadow}>
            <View style={styles.contentView}>
                <Text style={{fontSize: 15, fontWeight: '700', color: '#32343E',}}>{detail.name}</Text>
                <Text style={{fontSize: 13, fontWeight: '400', color: '#646982',}}>{detail.restaurantName}</Text>
                <View style={styles.optionView}>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#32343E'}}>${detail.price}</Text>
                    <TouchableOpacity
                        style={{
                            width: 32, 
                            height: 32, 
                            backgroundColor: '#F58D1D',
                            borderRadius: 1000,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5,
                        }}
                    >
                        <Image style={{width: 11.73, height: 11,}} source={require('../../assets/icon/plus.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default FoodDetailCart

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 190,
        width: 150,
        //backgroundColor: 'pink',
    },

    imageView: {
        height: 91.05,
        width: 132.6,
        //backgroundColor: 'green',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },

    contentView: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 134.44,
        width: 166,
        //backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 0,
        //zIndex: 0,
        borderRadius: 20,
        overflow: 'hidden',   
        backgroundColor: "#fffffF"  
    },

    contentViewShadow: {
        height: 134.44,
        width: 166,
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        backgroundColor: 'transparent',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.15,
        shadowRadius: 1.00,
        elevation: 5,
    },

    optionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})