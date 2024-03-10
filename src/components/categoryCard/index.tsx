import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface IProps {
    id: string;
    imageUri: ImageSourcePropType;
    name: string;
    onPress: () => void;
}

const CategoryCard: React.FC<IProps> = ({id, imageUri, name, onPress}) => {

  return (
    <TouchableOpacity 
        style={styles.viewContainer}
        onPress={onPress}
    >
        <View 
            style={styles.viewImage}
        >
            <Image style={styles.imgImage} source={imageUri}/>
        </View>

        <Text style={styles.txtName}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard