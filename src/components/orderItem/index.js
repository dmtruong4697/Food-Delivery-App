import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const OrderItem = (props) => {

    const {detail, onPressTrack, onPressCancel} = props;

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewType}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtType}>{detail.type}</Text>
            {
                (detail.status != "Ongoing") &&
                <Text style={[styles.txtStatus, {color: (detail.status == 'Completed')? '#059C6A':'#FF0000'}]}>{detail.status}</Text>
            }
        </View>
      </View>

      <View style={styles.viewContent}>
        <Image style={styles.imgImage} source={detail.imageUri}/>

        <View style={styles.viewInfo}>
            <Text style={styles.txtName}>{detail.name}</Text>
            <View style={{flexDirection: 'row', padding: 5,}}>
                <Text style={styles.txtName}>{detail.price} </Text>
                {(detail.status != "Ongoing") && <Text style={styles.txtQuantity}>| {detail.completeTime} •</Text>}
                <Text style={styles.txtQuantity}> {detail.quantity} Item
                </Text>
            </View>
        </View>

        <Text style={styles.txtCode}>#{detail.code}</Text>
      </View>

      {(detail.status == 'Ongoing')?
      (<View style={styles.viewButtonGroup}>
        <TouchableOpacity 
            style={[styles.btnButton, {backgroundColor: '#FF7622',}]}
            onPress={onPressTrack}
        >
            <Text style={[styles.txtButton, {color: '#FFFFFF'}]}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={[styles.btnButton, {borderWidth: 1, borderColor: '#FF7622',}]}
        >
            <Text style={[styles.txtButton, {color: '#FF7622',}]}>Cancel</Text>
        </TouchableOpacity>
      </View>)
      :
      (<View style={styles.viewButtonGroup}>
        <TouchableOpacity 
            style={[styles.btnButton, {borderWidth: 1, borderColor: '#FF7622',}]}
            onPress={onPressTrack}
        >
            <Text style={[styles.txtButton, {color: '#FF7622',}]}>Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={[styles.btnButton, {backgroundColor: '#FF7622',}]}
        >
            <Text style={[styles.txtButton, {color: '#FFFFFF'}]}>Re-Order</Text>
        </TouchableOpacity>
      </View>)
      }
    </View>
  )
}

export default OrderItem