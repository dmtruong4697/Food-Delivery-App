import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface IProps {
  id: string;
  name: string;
  type: string;
  restaurantName: string;
  restaurantId: string;
  imageUri: string;
  price: number;
  quantity: number;
  status: string;
  onPressTrack: () => void;
  onPressCancel: () => void;
}

type OrderItem = {
  id: string;
  name: string;
  type: string;
  restaurantName: string;
  restaurantId: string;
  imageUri: string;
  price: number;
  quantity: number;
}

const OrderItem: React.FC<IProps> = ({
  type, 
  imageUri, 
  name, 
  onPressCancel, 
  onPressTrack, 
  price, quantity, 
  id, 
  restaurantId, 
  restaurantName, 
  status}) => {

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewType}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.txtType}>{type}</Text>
            {
                (status != "Ongoing") &&
                <Text style={[styles.txtStatus, {color: (status == 'Completed')? '#059C6A':'#FF0000'}]}>{status}</Text>
            }
        </View>
      </View>

      <View style={styles.viewContent}>
        <Image style={styles.imgImage} source={{uri: imageUri}}/>

        <View style={styles.viewInfo}>
            <Text style={styles.txtName}>{name}</Text>
            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center',}}>
                <Text style={styles.txtName}>${price*quantity} </Text>
                {(status != "Ongoing") && <Text style={styles.txtQuantity}>| {'complete time'} •</Text>}
                <Text style={styles.txtQuantity}> {quantity} Item</Text>
            </View>
        </View>

        <Text style={styles.txtCode}>#{"code"}</Text>
      </View>

      {(status == 'Ongoing')?
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