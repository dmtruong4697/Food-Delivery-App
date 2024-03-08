import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface IProps {
    name: string;
    price: string;
    quantity: number;
}
const CartItem: React.FC<IProps> = ({name, price, quantity}) => {

  return (
    <View style={styles.viewContainer}>

        <View style={styles.viewImage}>
            <Image style={styles.viewImage} source={require('../../../assets/image/chicken.png')}/>
        </View>

        <View style={styles.viewContentContainer}>
            <View style={styles.viewContent}>
                <View style={styles.viewText}>
                    <Text style={styles.txtName}>{name}</Text>
                    <Text style={styles.txtPrice}>${price}</Text>
                </View>

                <TouchableOpacity style={styles.btnDelete}>
                    <Image style={styles.btnDelete} source={require('../../../assets/icon/delete.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.viewNumberInput}>
                <TouchableOpacity style={styles.btnNumberInput}>
                    <Text style={styles.txtNumberInput}>-</Text>
                </TouchableOpacity>

                <Text style={styles.txtNumberInput}>{quantity}</Text>
                
                <TouchableOpacity style={styles.btnNumberInput}>
                    <Text style={styles.txtNumberInput}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    </View>
  )
}

export default CartItem