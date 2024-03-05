import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FoodCard = (props) => {

    const {detail} = props;

  return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={{width: 100, height: 100,}} source={detail.imageUri}/>
        </View>

        <View style={styles.contentView}>
            <View style={{flex: 1,}}>
            <Text style={{fontSize: 20, fontWeight: '400', color: '#403F3E',}}>{detail.productName}</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                <Text style={{fontSize: 20, fontWeight: '400', color: '#403F3E',}}>$ {detail.price}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Image style={{height: 13.5, width: 13.5, marginRight: 3,}} source={require('../../assets/icon/star.png')}/>
                    <Text style={{fontSize: 16, fontWeight: '400', color: '#B0A9A2',}}>{detail.rating}</Text>
                </View>
            </View>
            </View>

            <View style={styles.buttonGroup}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 1000,
                        borderWidth: 1,
                        borderColor: '#E3DCD5',
                        marginRight: 10,
                    }}
                >
                    <Image style={{width: 24, height: 24,}} source={require('../../assets/icon/heart.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 1000,
                        backgroundColor: '#FFCA28',
                    }}
                >
                    <Image style={{width: 24, height: 24,}} source={require('../../assets/icon/cart2.png')}/>
                </TouchableOpacity>
            </View>
        </View>


    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 310,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginRight: 10,
    },

    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 8,
        backgroundColor: '#F0ECE9',
        marginRight: 10,
    },
    
    contentView: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: 20,
    },

    buttonGroup: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        //width: '100%',
        height: 48,
        marginBottom: 5,
    },
})