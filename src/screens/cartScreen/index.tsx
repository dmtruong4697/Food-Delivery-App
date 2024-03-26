import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useRef } from 'react'
import CartItem from '../../components/cartItem'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import Button from '../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CartStore } from '../../mobx/CartStore'
import { observer } from "mobx-react-lite"
import { toJS } from 'mobx'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

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

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

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
          data={CartStore.items}
          extraData={toJS(CartStore.items)}
          renderItem={({item}) => (
            <CartItem 
              id={item.id}
              name={item.name} 
              price={item.price} 
              quantity={item.quantity} 
              onPressRemove={() => {CartStore.removeItemById(item.id)}}
              onPressDecrease={() => {CartStore.decreaseQuantity(item.id)}}
              onPressIncrease={() => CartStore.increaseQuantity(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{height: 'auto'}}
        />
      </View>

      {/* <View style={styles.viewFooter}>
        <View style={styles.viewInfo}>
          <View style={styles.viewAddressEdit}>
            <Text style={styles.txtAddressEdit}>DELIVERY ADDRESS</Text>

            <TouchableOpacity
              onPress={() => {navigation.navigate('Tracker')}}
            >
              <Text style={styles.txtAddressEditButton}>EDIT</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtAddress}>2118 Thornridge Cir, Syracuse</Text>

          <View style={styles.viewTotal}>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
              <Text style={styles.txtTotal}>TOTAL:</Text>
              <Text style={styles.txtPrice}>${CartStore.total}</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.btnBreakDown}>Breakdown {'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button onPress={() => {navigation.navigate('Payment')}} content={'PLACE ORDER'}/>
      </View> */}

<BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={1}
        snapPoints={[50, 310]}
        backgroundStyle={{backgroundColor: '#F0F5FA'}}
        handleIndicatorStyle={{
          backgroundColor: '#F0F5FA',
          width: 72,
        }}
      >
        <BottomSheetView style={styles.viewFooter}>
        <View style={styles.viewInfo}>
          <View style={styles.viewAddressEdit}>
            <Text style={styles.txtAddressEdit}>DELIVERY ADDRESS</Text>

            <TouchableOpacity
              onPress={() => {navigation.navigate('Tracker')}}
            >
              <Text style={styles.txtAddressEditButton}>EDIT</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.txtAddress}>2118 Thornridge Cir, Syracuse</Text>

            <View style={styles.viewTotal}>
              <View style={{flexDirection: 'row', alignItems: 'center',}}>
                <Text style={styles.txtTotal}>TOTAL:</Text>
                <Text style={styles.txtPrice}>${CartStore.total}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {navigation.navigate('MyOrder')}}
              >
                <Text style={styles.btnBreakDown}>Breakdown {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button onPress={() => {navigation.navigate('Payment')}} content={'PLACE ORDER'}/>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )
}

export default observer(CartScreen)
