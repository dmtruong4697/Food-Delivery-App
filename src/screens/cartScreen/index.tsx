import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import CartItem from '../../components/cartItem'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import Button from '../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type CartDataType = {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const cartData: CartDataType[] = [
  {
      id: '1',
      name: 'Pizza Calzone Eupopean',
      price: '64',
      quantity: 2,
  },
  {
      id: '2',
      name: 'Pizza Calzone Eupopean',
      price: '32',
      quantity: 1,
  },
]

const CartScreen: FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
            <Text style={styles.txtTitle}>Cart</Text>
        </View>
      </View>

      <View style={styles.viewItemList}>
        <FlatList
          nestedScrollEnabled
          data={cartData}
          renderItem={({item}: {item: CartDataType}) => (
            <CartItem name={item.name} price={item.price} quantity={item.quantity}/>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{height: 'auto'}}
        />
      </View>

      <View style={styles.viewFooter}>
        <View style={styles.viewInfo}>
          <View style={styles.viewAddressEdit}>
            <Text style={styles.txtAddressEdit}>DELIVERY ADDRESS</Text>

            <TouchableOpacity>
              <Text style={styles.txtAddressEditButton}>EDIT</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtAddress}>2118 Thornridge Cir, Syracuse</Text>

          <View style={styles.viewTotal}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <Text style={styles.txtTotal}>TOTAL:</Text>
              <Text style={styles.txtPrice}> $96</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.btnBreakDown}>Breakdown {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button onPress={() => {navigation.navigate('Payment')}} content={'PLACE ORDER'}/>
      </View>

    </View>
  )
}

export default CartScreen
