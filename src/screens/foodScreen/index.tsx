import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './style';
import RestaurantCard from '../../components/restaurantCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FoodDetailCard from '../../components/foodDetailCard';
import { CartStore } from '../../mobx/CartStore';
import { getFoodData, searchFoodByType } from '../../firebase/services/FoodService';
import { getRestaurantData } from '../../firebase/services/RestaurantService';

type FoodType = {
    id: string;
    type: string,
    name: string;
    imageUri: string;
    restaurantName: string;
    restaurantId: string,
    price: number;
}

type RestaurantType = {
    id: string;
    name: string;
    description: string,
    imageUri: string;
    rating: number;
}

interface IProps {}

const FoodScreen: React.FC<IProps> = () => {

    const route = useRoute();
    const {detail} = route.params as {
        detail: {
            type: string,
        },
    };


    const [currentType, setCurrentType] = useState(detail.type);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
      });

    const [foodData, setFoodData] = useState<FoodType[]>([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await searchFoodByType(currentType);
            setFoodData(data);
          } catch (error) {
            console.error('Error fetching food data:', error);
          }
        };
    
        fetchData();
      }, []);

      const [restaurantData, setRestaurantData] = useState<RestaurantType[]>([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getRestaurantData();
            setRestaurantData(data);
          } catch (error) {
            console.error('Error fetching restaurant data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <ScrollView
        contentContainerStyle={styles.container}
        onLayout={(event) => setLayout(event.nativeEvent.layout)}
    >

      <View style={styles.headerView}>
        <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {navigation.goBack()}}
        >
            <Image style={styles.imgButtonBack} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View
            style={styles.viewSelectMenu}
        >
            <TouchableOpacity
                style={styles.btnSelectMenu}
            >
                <Text style={styles.txtSelectMenu}>
                    {detail.type}
                    <Text style={{color: '#F58D1D',}}>▼</Text>
                </Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={styles.btnSearch}
            onPress={() => {navigation.navigate('Search')}}
        >
            <Image style={styles.imgButtonSearch} source={require('../../../assets/icon/search2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.btnFilter}
        >
            <Image style={styles.imgButtonFilter} source={require('../../../assets/icon/filter.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.popularBurger}>
            <View style={styles.viewTitle}>
                <Text style={styles.txtTitle}>Popular {detail.type}</Text>
            </View>

            <FlatList
                key={'#'}
                nestedScrollEnabled
                data={foodData}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <FoodDetailCard
                        id={item.id}
                        imageUri={item.imageUri}
                        name={item.name}
                        price={item.price}
                        type={item.type}
                        restaurantName={item.restaurantName}
                        retaurantId={item.restaurantId}
                        onPressAdd={() => {
                            CartStore.addItem({...item}, 1);
                            console.log(CartStore)
                        }}
                    />
                )}
                contentContainerStyle={{height: 'auto', width: layout.width, gap: 10, alignItems: 'center', paddingBottom: 20,}}
                columnWrapperStyle={{gap: 20}}
            />

      </View>

      <View style={styles.viewOpenRestaurant}>
            <View style={styles.viewTitle}>
                <Text style={styles.txtTitle}>Open Restaurants</Text>
            </View>

            <FlatList
                nestedScrollEnabled
                data={restaurantData}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <RestaurantCard
                        id={item.id}
                        description={item.description}
                        imageUri={item.imageUri}
                        name={item.name}
                        rating={item.rating}
                    />
                )}
                contentContainerStyle={{alignItems: 'center', width: '100%',}}
            />

      </View>


    </ScrollView>
  )
}

export default FoodScreen