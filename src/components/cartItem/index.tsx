import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { observer } from "mobx-react-lite"
import { CartStore } from '../../mobx/CartStore'

interface IProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
    onPressRemove: () => void;
    onPressIncrease: () => void;
    onPressDecrease: () => void;
}

const CartItem: React.FC<IProps> = ({id, name, price, quantity, onPressRemove, onPressDecrease, onPressIncrease}) => {

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

                <TouchableOpacity 
                    style={styles.btnDelete}
                    onPress={onPressRemove}
                >
                    <Image style={styles.btnDelete} source={require('../../../assets/icon/delete.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.viewNumberInput}>
                <TouchableOpacity 
                    style={styles.btnNumberInput}
                    onPress={onPressDecrease}
                >
                    <Text style={styles.txtNumberInput}>-</Text>
                </TouchableOpacity>

                <Text style={styles.txtNumberInput}>{CartStore.getItemById(id)?.quantity}</Text>
                
                <TouchableOpacity 
                    style={styles.btnNumberInput}
                    onPress={onPressIncrease}
                >
                    <Text style={styles.txtNumberInput}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    </View>
  )
}

export default observer(CartItem)