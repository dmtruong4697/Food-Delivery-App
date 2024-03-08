import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface IProps {
  onPress: () => void;
  iconUri: ImageSourcePropType;
  name: string;
}

const MenuItem: React.FC<IProps> = ({onPress, iconUri, name}) => {

  return (
    <TouchableOpacity
      style={styles.viewContainer}
      onPress={onPress}
    >
      <View style={styles.viewIcon}>
        <Image style={styles.imgIcon} source={iconUri}/>
      </View>

      <Text style={styles.txtName}>{name}</Text>

      <Image style={styles.imgArrow} source={require('../../../assets/icon/arrowRight.png')}/>
    </TouchableOpacity>
  )
}

export default MenuItem