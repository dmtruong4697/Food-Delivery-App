import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { styles } from './styles'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {}

const CallScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.viewContainer}>
      <ImageBackground 
        source={require('../../../assets/image/shipper.png')}
        style={{width: '100%', height: '100%',}}
      >

      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[230, 350]}
        handleIndicatorStyle={{
          backgroundColor: '#FFFFFF',
          width: 72,
        }}
      >
        <BottomSheetView style={styles.viewSheetContainer}>
            <Image style={styles.imgAvatar} source={require('../../../assets/image/shipper.png')}/>
            <Text style={styles.txtName}>Robert Fox</Text>
            <Text style={styles.txtStatus}>Connecting......</Text>
            <View style={styles.viewOption}>
                <TouchableOpacity
                    style={styles.btnMic}
                >
                    <Image style={styles.imgMic} source={require('../../../assets/icon/mic.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCall}
                    onPress={() => {navigation.goBack()}}
                >
                    <Image style={styles.imgCall} source={require('../../../assets/icon/phone.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnVolume}
                >
                    <Image style={styles.imgVolume} source={require('../../../assets/icon/volume.png')}/>
                </TouchableOpacity>
            </View>
        </BottomSheetView>
      </BottomSheet>

      </ImageBackground>
    </View>
  )
}

export default CallScreen