import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { FC, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CardStore } from '../../mobx/CardStore'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { observer } from 'mobx-react'
import { editProfile, uploadImage } from '../../firebase/services/AuthService'
import { UserStore } from '../../mobx/UserStore'
import {ImageLibraryOptions, launchImageLibrary} from 'react-native-image-picker';

interface IProps {}

const EditProfileScreen: React.FC<IProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [selectedImage, setSelectedImage] = useState<any>(undefined);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = ()=> {
    // console.log(getValues());
    // console.log(errors)
    editProfile(navigation, getValues().userName, selectedImage);
  };

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let image = response.assets || response.assets?.[0];
        // setSelectedImage(imageUri);
        setSelectedImage(response.assets?.[0].uri);
        console.log(selectedImage);
      }
    });
  };

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
            <Text style={styles.txtTitle}>Edit Profile</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.imgAvatar}
        onPress={openImagePicker}
      >
            {(selectedImage) && <Image style={styles.imgAvatar} source={{uri: selectedImage}}/> }
      </TouchableOpacity>

      <View style={styles.viewInputForm}>
        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>USER NAME</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput  
                  style={styles.viewInputField}
                  onBlur={onBlur}
                  defaultValue={UserStore.getCurrentUser().displayName}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name='userName'
              rules={{
                required: true,
              }}
            />
            {errors.userName && <Text>Username is required.</Text>}
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>DESCRIPTION</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput  
                  style={styles.viewInputField}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name='description'
              rules={{
                required: true,
              }}
            />
            {errors.description && <Text>Description is required.</Text>}
        </View>

      </View>

      <View style={styles.viewFooter}>
        <Button content={'SUBMIT'} onPress={handleSubmit(onSubmit)}/>
        {/* <Button content={'UPLOAD'} onPress={() => {uploadImage(selectedImage)}}/> */}
      </View>

      {(UserStore.isEditLoading) && 
        <View style={styles.viewLoading}>
            <ActivityIndicator color={'#E53935'} size={100}/>
        </View>
      }

    </View>
  )
}

export default observer(EditProfileScreen)