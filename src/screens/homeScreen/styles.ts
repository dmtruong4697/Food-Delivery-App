import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

    allCategories: {
        alignItems: 'center',
        height: 105,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 15,
    },

    openRestaurants: {
        alignItems: 'center',
        height: 150,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 20,
    },

    popularFastFood: {
        alignItems: 'center',
        height: 200,
        width: '97%',
        //backgroundColor: 'pink',
        marginTop: 20,
        
    },
})