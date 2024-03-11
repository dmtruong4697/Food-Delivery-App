import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'

type UserType = {
    id: string,
    name: string,
    imageUri: ImageSourcePropType,
}

interface IProps {
    id: string,
    sender: UserType,
    receiver: UserType,
    createAt: string,
    content: string,
    hasSeen: boolean,
}

const MessageSendCard: React.FC<IProps> = ({id, content, createAt, hasSeen, receiver, sender}) => {
  return (
    <View style={styles.viewContainer}>
        <View style={{flex: 1}}></View>
        <View style={styles.viewContentContainer}>
            <Text style={styles.txtTime}>{createAt}</Text>
            <View style={styles.viewContent}>
                {(hasSeen == true) && <Image style={styles.imgSeen} source={require('../../../assets/icon/seen.png')}/>}
                <View style={styles.viewMessage}>
                    <Text style={styles.txtMessage}>{content}</Text>
                </View>
                <Image style={styles.imgAvatar} source={sender.imageUri}/>
            </View>
        </View>
    </View>
  )
}

export default MessageSendCard