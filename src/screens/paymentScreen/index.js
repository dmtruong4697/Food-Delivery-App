import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/button'

const MethodData = [
    {
        id: 1,
        name: 'Cash',
        imageUri: require('../../../assets/icon/payment/cash.png'),
        list: [

        ],
    },
    {
        id: 2,
        name: 'Visa',
        imageUri: require('../../../assets/icon/payment/visa.png'),
        list: [
            {
                id: 1,
                name: "Visa",
                number: "123 456 789",
            },
            {
                id: 2,
                name: "Visa 2",
                number: "123 456 789",
            },
            {
                id: 3,
                name: "Visa 3",
                number: "123 456 789",
            },
        ],
    },
    {
        id: 3,
        name: 'Mastercard',
        imageUri: require('../../../assets/icon/payment/mastercard.png'),
        list: [

        ],
    },
    {
        id: 4,
        name: 'Paypal',
        imageUri: require('../../../assets/icon/payment/paypal.png'),
        list: [

        ],
    },
]
const PaymentScreen = () => {

    const navigation = useNavigation();
    const [methodIndex, setMethodIndex] = useState(1);

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
            <Text style={styles.txtTitle}>Payment</Text>
        </View>
      </View>

      <View style={styles.viewMethodList}>
        <FlatList
            data={MethodData}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
                <View style={styles.viewMethod}>
                    <TouchableOpacity
                        style={[styles.btnMethod,{
                            backgroundColor: (methodIndex == item.id)? null:'#F0F5FA',
                            borderWidth: (methodIndex == item.id)? 2:0,
                            borderColor: (methodIndex == item.id)? '#FF7622':null,
                        }]}
                        onPress={() => {setMethodIndex(item.id)}}
                    >
                        <Image style={styles.imgMethodButton} source={item.imageUri}/>
                    </TouchableOpacity>
                    <Text style={styles.txtMethod}>{item.name}</Text>
                </View>
              )}
            contentContainerStyle={{gap: 10,}}
        />
      </View>

      <View style={styles.viewCardList}>
        {
            (MethodData[methodIndex-1].list.length == 0 && MethodData[methodIndex-1].name != "Cash")?
            <View style={styles.viewNocard}>
                <Image style={styles.imgNocard} source={require('../../../assets/image/nocard.png')}/>
                <Text style={styles.txtCardTitle}>No {MethodData[methodIndex-1].name} card added</Text>
                <Text style={styles.txtCard}>You can add a {MethodData[methodIndex-1].name} and save it for later</Text>
            </View>
            :
                <FlatList
                    data={MethodData[methodIndex-1].list}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.viewCard}>
                            <View style={styles.viewCardInfo}>
                                <Text style={styles.txtCardTitle}>{item.name}</Text>
                                <Text style={styles.txtCard}>{item.number}</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.btnCardDown}
                            >
                                <Text>▼</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    contentContainerStyle={{width: 340, gap: 10, justifyContent: 'center', alignItems: 'center',}}
                />
        }

        {(MethodData[methodIndex-1].name != "Cash") &&
            <TouchableOpacity
                style={styles.btnAddNew}
                onPress={() => {navigation.navigate({name: "AddCard"})}}
            >
                <Text style={styles.txtAddnew}>+ ADD NEW</Text>
            </TouchableOpacity>
        }
      </View>

      <View style={styles.viewFooter}>
        <View style={styles.viewTotal}>
            <Text style={styles.txtTotal}>TOTAL:</Text>
            <Text style={styles.txtPrice}> $96</Text>
        </View>

        <Button content={'PAY & CONFIRM'} onPress={() => {navigation.navigate({name: "PaymentSuccessfull"})}}/>
      </View>

    </View>
  )
}

export default PaymentScreen