import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Button = (props) => {

    const {content, onPress} = props;

  return (
    <View style={styles.viewAddButton}>
        <TouchableOpacity
            style={styles.btnAddButton}
            onPress={onPress}
        >
            <Text style={styles.txtAddButton}>{content}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button