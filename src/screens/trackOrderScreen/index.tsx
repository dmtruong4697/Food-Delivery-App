import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../../components/button';
import Modal from "react-native-modal";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

interface IProps {}

const TrackOrderScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowModal, setIsShowModal] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

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
        <Button content='Open Modal' onPress={() => {setIsShowModal(true)}}/>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{alignItems: 'center', flex: 1,}}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )
}

export default TrackOrderScreen