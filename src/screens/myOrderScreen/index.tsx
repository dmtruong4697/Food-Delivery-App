import { View, Text, TouchableOpacity, Image, useWindowDimensions, ScrollView, FlatList, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import OrderItem from '../../components/orderItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getOrderData } from '../../firebase/services/OrderService';

type OrderItemType = {
    id: string;
    name: string;
    type: string;
    restaurantName: string;
    restaurantId: string;
    imageUri: string;
    price: number;
    quantity: number;
}

type Order = {
    id: string,
    userId: string,
    createAt: string,
    total: number,
    orderList: OrderItemType[],
    status: string,
}

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

interface IProps {}

const MyOrderScreen: React.FC<IProps>  = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const layout = useWindowDimensions();

    function ongoingFilter(order: Order) {
        return order.status == 'Ongoing';
    }

    function historyFilter(order: Order) {
        return order.status != 'Ongoing';
    }

    const [orderData, setOrderData] = useState<Order[]>([]);
    const [ongoingData, setOngoingData] = useState<OrderItem[]>([]);
    const [historyData, setHistoryData] = useState<OrderItem[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getOrderData();
          const onGoing = data.filter(ongoingFilter);
          const history = data.filter(historyFilter);
          setOngoingData(onGoing.flatMap(item => item.orderList));
          setHistoryData(history.flatMap(item => item.orderList));
        //   const orderItemData = data.flatMap(item => item.orderList);
        //   console.log(orderItemData);
          setOrderData(data);
        } catch (error) {
          console.error('Error fetching order data:', error);
        }
      };
  
      fetchData();
    }, []);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Ongoing' },
      { key: 'second', title: 'History' },
    ]);

    const FirstRoute = () => (
        <View style={{width: '100%', padding: 15, marginTop: 10, alignItems: 'center'}}>
                <FlatList
                    nestedScrollEnabled
                    data={ongoingData}
                    keyExtractor={item => item.id}
                    renderItem={({item}: {item: OrderItem}) => (
                        <OrderItem 
                            onPressTrack={() => {navigation.navigate('Tracker')}}
                            imageUri={item.imageUri}
                            name={item.name}
                            onPressCancel={() => {}}
                            price={item.price}
                            quantity={item.quantity}
                            status={'Ongoing'}
                            type={item.type}
                            id={item.id}
                            restaurantId={item.restaurantId}
                            restaurantName={item.restaurantName}
                        />
                    )}
                />
        </View>
      );
      
    const SecondRoute = () => (
        <View style={{width: '100%', padding: 15, marginTop: 10, alignItems: 'center'}}>
                <FlatList
                    nestedScrollEnabled
                    data={historyData}
                    keyExtractor={item => item.id}
                    renderItem={({item}: {item: OrderItem}) => (
                        <OrderItem 
                            onPressTrack={() => {navigation.navigate('Tracker')}}
                            imageUri={item.imageUri}
                            name={item.name}
                            onPressCancel={() => {}}
                            price={item.price}
                            quantity={item.quantity}
                            status={'Completed'}
                            type={item.type}
                            id={item.id}
                            restaurantId={item.restaurantId}
                            restaurantName={item.restaurantName}
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