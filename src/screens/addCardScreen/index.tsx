import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { FC } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../components/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CardStore } from '../../mobx/CardStore'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { observer } from 'mobx-react'

interface IProps {}

type FormDataType = {
  id: '1',
  cardHolderName: string;
  cardNumber: string;
  expireDate: Date;
  cvc: string;
}

const AddCardScreen: React.FC<IProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute();
  const {type} = route.params as {
    type: string,
  };

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormDataType)=> {
    CardStore.addCard({...data, type: type});
    // console.log(getValues());
    console.log(CardStore.items[1].list)
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
            <Text style={styles.txtTitle}>Add Card</Text>
        </View>
      </View>

      <View style={styles.viewInputForm}>
        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>CARD HOLDER NAME</Text>
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
              name='cardHolderName'
              rules={{
                required: true,
              }}
            />
            {errors.holderName && <Text>Card holder name is required.</Text>}
        </View>

        <View style={styles.viewInput}>
            <Text style={styles.txtFieldTitle}>CARD NUMBER</Text>
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
              name='cardNumber'
              rules={{
                required: true,
              }}
            />
            {errors.cardNumber && <Text>Card number is required.</Text>}
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.viewInput1}>
                <Text style={styles.txtFieldTitle}>EXPIRE DATE</Text>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput  
                      style={styles.viewInputField}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder='mm/yyyy'
                    />
                  )}
                  name='expireDate'
                  rules={{
                    required: true,
                  }}
                />
                {errors.expireDate && <Text>Expire date is required.</Text>}
            </View>

            <View style={styles.viewInput1}>
                <Text style={styles.txtFieldTitle}>CVC</Text>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput  
                      style={styles.viewInputField}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      secureTextEntry
                    />
                  )}
                  name='cvc'
                  rules={{
                    required: true,

                  }}
                />
                {errors.cvc && <Text>CVC is required.</Text>}
            </View>
        </View>
      </View>

      <View style={styles.viewFooter}>
        {/* <Button content={'ADD & MAKE PAYMENT'} onPress={() => {navigation.navigate('MyOrder')}}/> */}
        <Button content={'ADD & MAKE PAYMENT'} onPress={handleSubmit(onSubmit)}/>
      </View>

    </View>
  )
}

export default observer(AddCardScreen)