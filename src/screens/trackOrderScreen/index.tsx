import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/button';
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";
import MapView from 'react-native-maps';

interface IProps {}

const TrackOrderScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowModal, setIsShowModal] = useState(false);

    const refRBSheet = useRef();

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            // onPress={() => {navigation.goBack()}}
            onPress={() => refRBSheet.current.open()}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Track Order</Text>
        </View>
      </View>

      <View style={styles.viewMap}>
        <Button content='Open Modal' onPress={() => setIsShowModal(true)}/>
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      </View>

      {/* <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#F6F6F6",
            width: 72,
            height: 7,
          },
          container: {
            // backgroundColor: 'pink',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      /> */}

      <Modal
        isVisible={isShowModal}
        onSwipeComplete={() => setIsShowModal(false)}
        onBackdropPress={() => setIsShowModal(false)}
        swipeThreshold={200}
        swipeDirection="down"
      >
        <View style={{ flex: 1, height: 100, width: '100%', backgroundColor: 'white' }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>

    </View>
  )
}

export default TrackOrderScreen