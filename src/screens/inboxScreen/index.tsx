import { View, Text, TouchableOpacity, Image, ImageSourcePropType, FlatList, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MessageSendCard from '../../components/messageSendCard';
import MessageSReceiveCard from '../../components/messageReceiveCard';

type UserType = {
    id: string,
    name: string,
    imageUri: ImageSourcePropType,
}

type MessageType = {
    id: string,
    sender: UserType,
    receiver: UserType,
    createAt: string,
    content: string,
    hasSeen: boolean,
}

type ConversationType = {
    user1: UserType,
    user2: UserType,
    messageList: MessageType[],
}

const ConversationData: ConversationType = {
    user1: {
        id: '1',
        name: 'Robert',
        imageUri: require('../../../assets/image/shipper.png')
    },

    user2: {
        id: '2',
        name: 'Robert',
        imageUri: require('../../../assets/image/shipper.png')
    },

    messageList: [
        {
            id: '1',
            sender: {
                id: '1',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            receiver: {
                id: '2',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            createAt: '8:10 pm',
            content: 'Are you coming?',
            hasSeen: true,
        },
        {
            id: '2',
            sender: {
                id: '2',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            receiver: {
                id: '1',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            createAt: '8:10 pm',
            content: 'Hay, Congratulation for order',
            hasSeen: true,
        },
        {
            id: '3',
            sender: {
                id: '1',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            receiver: {
                id: '2',
                name: 'Robert',
                imageUri: require('../../../assets/image/shipper.png')
            },
            createAt: '8:10 pm',
            content: 'Hey Where are you now?',
            hasSeen: true,
        },
    ]
}

interface IProps {}

const InboxScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View style={styles.viewTitle}>
            <Text style={styles.txtTitle}>Inbox</Text>
        </View>
      </View>

      <View style={styles.viewMessage}>
            <FlatList
                nestedScrollEnabled
                data={ConversationData.messageList}
                keyExtractor={item => item.id}
                renderItem={({item}: {item: MessageType}) => {
                    return(
                        (ConversationData.user1.id == item.sender.id)?
                            <MessageSendCard
                                id={item.id}
                                content={item.content}
                                createAt={item.createAt}
                                hasSeen={item.hasSeen}
                                receiver={item.receiver}
                                sender={item.sender}
                            />
                            :
                            <MessageSReceiveCard
                                id={item.id}
                                content={item.content}
                                createAt={item.createAt}
                                hasSeen={item.hasSeen}
                                receiver={item.receiver}
                                sender={item.sender}
                            />
                        
                    )
                }}
            />
      </View>

      <View style={styles.viewInput}>
        <TouchableOpacity
            style={styles.btnIcon}
        >
            <Image style={styles.imgIcon} source={require('../../../assets/icon/icon.png')}/>
        </TouchableOpacity>

        <TextInput
            style={styles.inputField}
            placeholder='Write somethings'
        />

        <TouchableOpacity
            style={styles.btnSend}
        >
            <Image style={styles.imgSend} source={require('../../../assets/icon/send.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InboxScreen    