import { ActivityIndicator, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase/config'
import { UserStore } from '../../mobx/UserStore'
import { getDatabase, ref, set } from '@firebase/database'
import { signIn, signUp } from '../../firebase/services/AuthService'
import { getExample } from '../../services/api'
import { observer } from 'mobx-react'
import { AuthStore } from '../../mobx/AuthStore'
import { Controller, useForm } from 'react-hook-form'

const SignUpScreen: FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors },
      } = useForm();
    
      const onSubmit = ()=> {
        console.log(getValues());
      };

  return (
    <View style={styles.container}>
      
      <View style={styles.title1}>
        <View style={{width: 219, height: 72,}}
        >
            <Text style={styles.txtTitle}>
                Just {""}
                <Text style={styles.txtTitle2}>Sign up</Text>
                ,we'll prepar your order
            </Text>
        </View>
      </View>

      <View style={styles.title2}>
            <View 
                style={{height: 48, width: 231,}}
            >
                <Text style={{fontSize: 16, fontWeight: '500', color: '#646982'}}>
                    If you don't have an account please {""}
                    <Text style={{fontSize: 16, fontWeight: '500', color: '#F44336'}}>Sign up here</Text>
                </Text>
            </View>
      </View>

      <View style={styles.inputForm}>
        
        <View style={styles.inputField}>
            <Text style={styles.inputFieldTitle}>Email address</Text>
            <View style={styles.textInput}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput  
                        style={styles.viewInput}
                        placeholder='email'
                        placeholderTextColor={'#939393'}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        />
                    )}
                    name='email'
                    rules={{
                        required: true,
                    }}
                />
            </View>
            {errors.email && <Text>Email is required.</Text>}
        </View>

        <View style={styles.inputField}>
            <Text style={styles.inputFieldTitle}>Password</Text>
            <View style={styles.textInput}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput  
                        placeholder='password'
                        placeholderTextColor={'#939393'}
                        secureTextEntry={isShowPassword}
                        style={styles.viewInput}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                        />
                    )}
                    name='password'
                    rules={{
                        required: true,
                    }}
                />
                <TouchableOpacity
                    onPress={() => {setIsShowPassword(!isShowPassword)}}
                >
                    <Image style={{width: 20, height: 16, marginLeft: 12, marginRight: 12,}} source={require('../../../assets/icon/showPassword.png')}/>
                </TouchableOpacity>
            </View>
            {errors.password && <Text>Password is required.</Text>}
        </View>

        <TouchableOpacity>
            <Text
                style={styles.btnForgotPassword}
            >Forgot password?</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonGroup}>
        
        <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSubmit(() => {
                onSubmit();
                signUp(navigation, getValues().email, getValues().password);
            })}
        >
            <Text style={{fontSize: 16, fontWeight: '700', color: '#FFFFFF'}}
            >SIGN UP</Text>
        </TouchableOpacity>

        <Text 
            style={styles.txtOr}
        >Or</Text>

        <TouchableOpacity
            style={[styles.socialButton, {backgroundColor: '#FBFBFB'}]}
            onPress={() => {getExample()}}
        >
            <Image style={styles.mediaIcon} source={require('../../../assets/mediaIcon/facebook.png')}/>
            <Text style={styles.socialButtonText}>Connect with facebok</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.socialButton, ]}
        >
            <Image style={styles.mediaIcon} source={require('../../../assets/mediaIcon/google.png')}/>
            <Text style={styles.socialButtonText}>Connect with Google</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default observer(SignUpScreen)