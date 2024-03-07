import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MenuItem = (props) => {

  const {detail} = props;

  return (
    <TouchableOpacity
      style={styles.viewContainer}
      onPress={detail.onPress}
    >
      <View style={styles.viewIcon}>
        <Image style={styles.imgIcon} source={detail.iconUri}/>
      </View>

      <Text style={styles.txtName}>{detail.name}</Text>

      <Image style={styles.imgArrow} source={require('../../../assets/icon/arrowRight.png')}/>
    </TouchableOpacity>
  )
}

export default MenuItem