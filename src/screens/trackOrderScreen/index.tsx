import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/button';
import Modal from "react-native-modal";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';

interface IProps {}

const TrackOrderScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowModal, setIsShowModal] = useState(false);

      // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
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
            <Text style={styles.txtTitle}>Track Order</Text>
        </View>
      </View>

      <View style={styles.viewMap}>

      </View>

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        index={1}
        snapPoints={[130, 550]}
        handleIndicatorStyle={{
          backgroundColor: '#1A18170D',
          width: 72,
        }}
      >
        <BottomSheetView style={{flex: 1,alignItems: 'center',}}>
          <View style={styles.viewOrderInfo}>
            <Image style={styles.imgOrder} source={require('../../../assets/image/chicken.png')}/>
            <View style={styles.viewContent}>
              <Text style={styles.txtRestaurantName}>Uttora Coffee House</Text>
              <Text style={styles.txtCreate}>Orderd At 06 Sept, 10:00pm</Text>
              <View style={styles.viewOrderList}>
                  <Text style={styles.txtDish}>2x Burger</Text>
                  <Text style={styles.txtDish}>4x Sanwich</Text>
              </View>
            </View>
          </View>

          <View style={styles.viewOrderTracking}>
            <Text style={styles.txtTime}>20 min</Text>
            <Text style={styles.txtDeliveryTime}>ESTIMATED DELIVERY TIME</Text>
          </View>

          <View style={styles.viewFooter}>
            <Image style={styles.imageShipper} source={require('../../../assets/image/shipper.png')}/>
            <View style={styles.viewShipperInfo}>
              <Text style={styles.txtShipperName}>Robert F.</Text>
              <Text style={styles.txtShippingMethod}>Courier</Text>
            </View>

            <TouchableOpacity
              style={styles.btnCall}
              onPress={() => {navigation.navigate('Call')}}
            >
              <Image style={styles.imgCall} source={require('../../../assets/icon/phone.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnMessage}
              onPress={() => {navigation.navigate('Inbox')}}
            >
              <Image style={styles.imgMessage} source={require('../../../assets/icon/message.png')}/>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )
}

export default TrackOrderScreen