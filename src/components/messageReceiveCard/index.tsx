import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
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

const MessageSReceiveCard: React.FC<IProps> = ({id, content, createAt, hasSeen, receiver, sender}) => {

    const [isShowTime, setIsShowTime] = useState(false);

  return (
    <View style={styles.viewContainer}>
        <View style={{flex: 1}}></View>
        <View style={styles.viewContentContainer}>
            {(isShowTime) && <Text style={styles.txtTime}>{createAt}</Text>}
            <View style={styles.viewContent}>
                <TouchableOpacity
                    style={styles.viewMessage}
                    onPress={() => {setIsShowTime(!isShowTime)}}
                >
                    <Text style={styles.txtMessage}>{content}</Text>
                </TouchableOpacity>
                <Image style={styles.imgAvatar} source={sender.imageUri}/>
            </View>
        </View>
    </View>
  )
}

export default MessageSReceiveCard