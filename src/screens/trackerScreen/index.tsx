import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase, useNavigation } from '@react-navigation/native'

interface IProps {}

const TrackerScreen: React.FC<IProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
        <Button onPress={() => {navigation.navigate('TrackOrder')}} content={'TRACK YOUR ORDER'}/>
      </View>

    </View>
  )
}

export default TrackerScreen