import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const SignInScreen = () => {

    const navigation = useNavigation();

    const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.title1}>
        <View 
            style={{
                width: 219,
                height: 72,
            }}
        >
            <Text style={{fontSize: 24, fontWeight: '700', color: '#32343E'}}>
                Just {""}
                <Text style={{fontSize: 24, fontWeight: '700', color: '#F44336'}}>Sign in</Text>
                ,we'll prepar your order
            </Text>
        </View>
      </View>

      <View style={styles.title2}>
            <View 
                style={{
                    height: 48,
                    width: 231,
                }}
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
                <TextInput 
                    placeholder='email'
                    placeholderTextColor={'#939393'}
                    style={{
                        flex: 1,
                        height: '100%',
                        padding: 14,
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#939393',
                    }}
                />
            </View>
        </View>

        <View style={styles.inputField}>
            <Text style={styles.inputFieldTitle}>Password</Text>
            <View style={styles.textInput}>
                <TextInput 
                    placeholder='password'
                    placeholderTextColor={'#939393'}
                    secureTextEntry={isShowPassword}
                    style={{
                        flex: 1,
                        height: '100%',
                        padding: 14,
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#939393',
                    }}
                />
                <TouchableOpacity
                    onPress={() => {setIsShowPassword(!isShowPassword)}}
                >
                    <Image style={{width: 20, height: 16, marginLeft: 12, marginRight: 12,}} source={require('../../../assets/icon/showPassword.png')}/>
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity>
            <Text
                style={{
                    alignSelf: 'flex-end',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#939393',
                    marginTop: 22,
                }}
            >Forgot password?</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonGroup}>
        
        <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
                navigation.navigate({name: "Home"})
            }}
        >
            <Text style={{fontSize: 16, fontWeight: '700', color: '#FFFFFF'}}
            >SIGN IN</Text>
        </TouchableOpacity>

        <Text 
            style={{
                fontSize: 16, 
                fontWeight: '500', 
                color: '#000000', 
                marginTop: 30, 
                marginBottom: 30,
            }}
        >Or</Text>

        <TouchableOpacity
            style={[styles.socialButton, {backgroundColor: '#FBFBFB'}]}
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

export default SignInScreen