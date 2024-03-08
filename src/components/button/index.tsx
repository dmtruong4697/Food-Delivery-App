import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

interface IProps {
  content: string;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({content, onPress}) => {

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