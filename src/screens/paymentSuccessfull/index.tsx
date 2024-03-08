import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface IProps {}

const PaymentSuccessfullScreen: React.FC<IProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => {navigation.navigate('Home')}}
        >
            <Image style={styles.imgButtonCancel} source={require('../../../assets/icon/cancel.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewContent}>
        <View style={styles.viewImageContent}>
            <Image style={styles.imgContent} source={require('../../../assets/image/success.png')}/>
        </View>

        <Text style={styles.txtTitle}>Congratulations!</Text>
        <Text style={styles.txtContent}>You successfully maked a payment, enjoy our service!</Text>
      </View>
    </View>
  )
}

export default PaymentSuccessfullScreen