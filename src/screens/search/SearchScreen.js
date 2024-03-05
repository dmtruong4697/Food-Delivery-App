import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RecentKeywordData = [
    {
        id: 1,
        content: "Burger",
    },
    {
        id: 2,
        content: "Sandwich",
    },
    {
        id: 3,
        content: "Pizza",
    },
]

const RecentKeyword = (props) => {

    const {detail} = props;
    return (
        <TouchableOpacity style={styles.recentKeyword}>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#181C2E',}}>{detail.content}</Text>
        </TouchableOpacity>
    )
}

const SearchScreen = () => {

    const [searchText, setSearchText] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.headerView}>
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: 45,
                backgroundColor: '#ECF0F4',
                borderRadius: 1000,
            }}
        >
            <Image style={{height: 12, width: 6,}} source={require('../../../assets/icon/arrowLeft.png')}/>
        </TouchableOpacity>

        <View
            style={{
                flex: 1,
                //flexDirection: 'column', 
                justifyContent: 'center',
                height: '100%',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
            }}
        >
            <Text style={{fontSize: 20, fontWeight: '500', color: '#1A1817',}}>Search</Text>
        </View>

        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 45,
                width: 45,
                backgroundColor: '#181C2E',
                borderRadius: 1000,
            }}
            onPress={() => {navigation.navigate({name: "MyCart"})}}
        >
            <Image style={{height: 20, width: 18,}} source={require('../../../assets/icon/cart.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchView}>

        <View 
            style={styles.searchField}
            onPress={() => {
                navigation.navigate({name: "Search"})
            }}
        >
            <Image style={{width: 24, height: 24,}} source={require('../../../assets/icon/search.png')}/>
            <TextInput
                style={{
                    flex: 1,
                    height: '100%',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#181C2E',
                    marginLeft: 5,
                }}
                placeholder='What will you like to eat?'
                placeholderTextColor={'#979797'}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <TouchableOpacity
                onPress={() => {setSearchText("")}}
            >
                <Image style={{width: 20, height: 20,}} source={require('../../../assets/icon/clear.png')}/>
            </TouchableOpacity>
        </View>

      </View>

      <View style={styles.recentKeywordView}>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 27,
                width: '100%',
                marginBottom: 5,
            }}
        >
            <Text style={{fontSize: 20, fontWeight: '400', color: '#32343E', flex: 1,}}>Recent Keywords</Text>
        </View>

        <FlatList
            nestedScrollEnabled
            data={RecentKeywordData}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <RecentKeyword detail={item}/>
            )}
            contentContainerStyle={{height: 50, alignItems: 'center', width: '100%',}}
        />
      </View>

    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },

    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 20,
    },

    searchView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '97%',
        marginTop: 20,
    },

    searchField: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: 350,
        height: 62,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginTop: 10,
    },

    recentKeywordView: {
        alignItems: 'center',
        height: 105,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 15,
    },

    recentKeyword: {
        height: 46,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#EDEDED',
        marginRight: 8 ,
    },
})