import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../components/button'

const TrackerScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.imgImage} source={require('../../../assets/image/track.png')}/>

      <Text style={styles.txtTitle}>TRACK YOUR ORDER</Text>

      <Text style={styles.txtContent}>Enter your tracking number below</Text>

      <TextInput
        style={styles.viewInputField}
        placeholder='Tracking number'
      />

      <View style={styles.viewFooter}>
        <Button content={'PAY & CONFIRM'}/>
      </View>

    </View>
  )
}

export default TrackerScreen