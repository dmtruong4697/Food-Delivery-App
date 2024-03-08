import { View, Text, TouchableOpacity, Image, useWindowDimensions, ScrollView, FlatList, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import OrderItem from '../../components/orderItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CartType = {
    id: string;
    type: string;
    status: string;
    completeTime: string;
    imageUri: ImageSourcePropType;
    name: string;
    price: string;
    quantity: number;
    code: string;
}

const OngoingData: CartType[] = [
    {
        id: '1',
        type: 'Food',
        status: 'Ongoing',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'McDonnald',
        price: '40.15',
        quantity: 2,
        code: '242432',
    },
    {
        id: '2',
        type: 'Food',
        status: 'Ongoing',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'Pizza Hut',
        price: '35.25',
        quantity: 1,
        code: '162432',
    },
    {
        id: '3',
        type: 'Drink',
        status: 'Ongoing',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'Starbucks',
        price: '10.20',
        quantity: 1,
        code: '240112',
    },
];

const HistoryData: CartType[] = [
    {
        id: '1',
        type: 'Food',
        status: 'Completed',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'McDonnald',
        price: '40.15',
        quantity: 2,
        code: '242432',
    },
    {
        id: '2',
        type: 'Food',
        status: 'Completed',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'Pizza Hut',
        price: '35.25',
        quantity: 1,
        code: '162432',
    },
    {
        id: '3',
        type: 'Drink',
        status: 'Canceled',
        completeTime: '29 JAN, 12:30',
        imageUri: require('../../../assets/image/chicken.png'),
        name: 'Starbucks',
        price: '10.20',
        quantity: 1,
        code: '240112',
    },
];

interface IProps {}

const MyOrderScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Ongoing' },
      { key: 'second', title: 'History' },
    ]);

    const FirstRoute = () => (
        <View style={{width: '100%', padding: 15, marginTop: 10, alignItems: 'center'}}>
                <FlatList
                    nestedScrollEnabled
                    data={OngoingData}
                    keyExtractor={item => item.id}
                    renderItem={({item}: {item: CartType}) => (
                        <OrderItem 
                            onPressTrack={() => {navigation.navigate('Tracker')}}
                            code={item.code}
                            completeTime={item.completeTime}
                            imageUri={item.imageUri}
                            name={item.name}
                            onPressCancel={() => {}}
                            price={item.price}
                            quantity={item.quantity}
                            status={item.status}
                            type={item.type}
                        />
                    )}
                />
        </View>
      );
      
    const SecondRoute = () => (
        <View style={{width: '100%', padding: 15, marginTop: 10, alignItems: 'center'}}>
                <FlatList
                    nestedScrollEnabled
                    data={HistoryData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <OrderItem 
                            onPressTrack={() => {}}
                            code={item.code}
                            completeTime={item.completeTime}
                            imageUri={item.imageUri}
                            name={item.name}
                            onPressCancel={() => {}}
                            price={item.price}
                            quantity={item.quantity}
                            status={item.status}
                            type={item.type}
                        />
                    )}
                />
        </View>
    );
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });

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
            <Text style={styles.txtTitle}>My Orders</Text>
        </View>

        <TouchableOpacity
            style={styles.btnOption}
        >
            <Image style={styles.imgButtonOption} source={require('../../../assets/icon/option.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.viewTab}>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#FF7622', }}
                    style={{ backgroundColor: '#FFFFFF',}}
                    labelStyle={{ textTransform: 'capitalize', fontSize: 14, fontWeight: '700', color: '#A5A7B9' }}
                    activeColor='#FF7622'
              />
              }
        />
        </View>
    </View>
  )
}

export default MyOrderScreen