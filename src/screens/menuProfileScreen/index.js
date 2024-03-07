import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import MenuItem from '../../components/menuItem'
import { useNavigation } from '@react-navigation/native'

const MenuData = [
    {
        id: 1,
        list: [
            {
                id: 1,
                name: 'Personal Info',
                iconUri: require('../../../assets/icon/menu/personalInfo.png'),
                onPress: (() => {console.log("personal info")}),
            },
            {
                id: 2,
                name: 'Addresses',
                iconUri: require('../../../assets/icon/menu/address.png'),
                onPress: (() => {console.log("address")}),
            },
        ]
    },

    {
        id: 2,
        list: [
            {
                id: 1,
                name: 'Cart',
                iconUri: require('../../../assets/icon/menu/cart.png'),
                onPress: (() => {console.log("cart")}),
            },
            {
                id: 2,
                name: 'Favoutite',
                iconUri: require('../../../assets/icon/menu/address.png'),
                onPress: (() => {console.log("favourite")}),
            },
            {
                id: 3,
                name: 'Notifications',
                iconUri: require('../../../assets/icon/menu/personalInfo.png'),
                onPress: (() => {console.log("noti")}),
            },
            {
                id: 4,
                name: 'Payment Method',
                iconUri: require('../../../assets/icon/menu/cart.png'),
                onPress: (() => {console.log("payment method")}),
            },
        ]
    },

    {
        id: 3,
        list: [
            {
                id: 1,
                name: 'FAQs',
                iconUri: require('../../../assets/icon/menu/cart.png'),
                onPress: (() => {console.log("faqs")}),
            },
            {
                id: 2,
                name: 'User Reviews',
                iconUri: require('../../../assets/icon/menu/address.png'),
                onPress: (() => {console.log("review")}),
            },
            {
                id: 3,
                name: 'Settings',
                iconUri: require('../../../assets/icon/menu/personalInfo.png'),
                onPress: (() => {console.log("setting")}),
            },
        ]
    },

    {
        id: 4,
        list: [
            {
                id: 1,
                name: 'Log Out',
                iconUri: require('../../../assets/icon/menu/cart.png'),
                onPress: (() => {console.log("log out")}),
            },  
        ]
    },
]

const MenuProfileScreen = () => {

    const navigation = useNavigation();

    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
      });

  return (
    <ScrollView 
        contentContainerStyle={styles.viewContainer}
        onLayout={(event) => setLayout(event.nativeEvent.layout)}
    >
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Menu Profile</Text>
        </View>

        <TouchableOpacity
            style={styles.btnOption}
        >
            <Image style={styles.imgButtonOption} source={require('../../../assets/icon/option.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewInfo}>
        <Image style={styles.imgAvatar} source={require('../../../assets/image/avatar.png')}/>
        <View style={styles.viewText}>
            <Text style={styles.txtName}>Septa</Text>
            <Text style={styles.txtStatus}>I love fast food</Text>
        </View>
      </View>

      <View style={styles.viewSettingList}>
                <FlatList
                    data={MenuData}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    renderItem={({item}) => (
                        <View style={styles.viewSettingGroup}>
                           {
                            item.list.map((item1) => {
                                return (
                                    <MenuItem key={item1.id} detail={item1}/>
                                )
                            }) 
                           }
                        </View>
                    )}
                    contentContainerStyle={{width: layout.width-18, gap: 5,}}
                />
      </View>
    </ScrollView>
  )
}

export default MenuProfileScreen