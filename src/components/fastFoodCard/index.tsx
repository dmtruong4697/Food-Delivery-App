import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';

interface IProps {
    id: string;
    name: string;
    imageUri: string;
    restaurantName: string;
    price: number;
    type: string,
    restaurantId: string,
}

const FastFoodCard: React.FC<IProps> = ({id, imageUri, name, price, restaurantName, type, restaurantId}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.viewShadow}>
    <TouchableOpacity 
      style={styles.viewContainer}
      onPress={() => {navigation.navigate('FoodDetail', 
      {
          detail: {
              id: id,
              imageUri: imageUri,
              name: name,
              price: price,
              type: type,
              restaurantName: restaurantName,
          },
      })}}
    >
      <Image style={styles.imgImage} source={{uri: imageUri}}/>

      <View style={styles.viewContent}>
        <Text style={styles.txtTitle}>{name}</Text>
        <Text style={styles.txtContent}>{restaurantName}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default FastFoodCard