import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/button'

const AddCardScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Add Card</Text>
        </View>
      </View>

      <View style={styles.viewInputForm}>
        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>CARD HOLDER NAME</Text>
            <TextInput style={styles.viewInputField}/>
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>CARD NUMBER</Text>
            <TextInput style={styles.viewInputField}/>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.viewInput1}>
                <Text style={styles.txtFieldTitle}>EXPIRE DATE</Text>
                <TextInput 
                    style={styles.viewInputField}
                    placeholder='mm/yyyy'
                />
            </View>

            <View style={styles.viewInput1}>
                <Text style={styles.txtFieldTitle}>CVC</Text>
                <TextInput 
                    style={styles.viewInputField}
                    secureTextEntry
                />
            </View>
        </View>
      </View>

      <View style={styles.viewFooter}>
        <Button content={'ADD & MAKE PAYMENT'} onPress={() => {navigation.navigate({name: "MyOrder"})}}/>
      </View>

    </View>
  )
}

export default AddCardScreen