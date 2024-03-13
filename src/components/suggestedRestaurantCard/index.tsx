import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
    id: string;
    name: string;
    description: string,
    imageUri: string;
    rating: number;
}

const SuggestedRestaurantCard: React.FC<IProps> = ({id, imageUri, name, rating, description}) => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity 
      style={styles.viewContainer}
      onPress={() => {navigation.navigate('RestaurantDetail',{
        detail: {
          id: id,
          name: name,
          description: description,
          imageUri: imageUri,
          rating: rating,
        },
    })}}
    >
      
      <View style={styles.viewImage}>
        <Image style={styles.viewImage} source={{uri: imageUri}}/>
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