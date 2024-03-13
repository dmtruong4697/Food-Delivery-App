import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        height: 190,
        width: 150,
        //backgroundColor: 'pink',
    },

    imgImage: {
        height: 105.05,
        width: 105.6,
        //backgroundColor: 'green',
        position: 'absolute',
        top: 0,
        zIndex: 1,
    },

    viewContent: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 134.44,
        width: 166,
        //backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 0,
        //zIndex: 0,
        borderRadius: 20,
        overflow: 'hidden',   
        backgroundColor: "#fffffF"  
    },

    viewContentShadow: {
        height: 134.44,
        width: 166,
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        backgroundColor: 'transparent',
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.15,
        shadowRadius: 1.00,
        elevation: 5,
    },

    viewOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    txtName: {
        fontSize: 15, 
        fontWeight: '700', 
        color: '#32343E',
    },

    txtRestaurantName: {
        fontSize: 13, 
        fontWeight: '400', 
        color: '#646982',
    },

    txtPrice: {
        fontSize: 16, 
        fontWeight: '400', 
        color: '#32343E'
    },

    btnAdd: {
        width: 32, 
        height: 32, 
        backgroundColor: '#F58D1D',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },

    imgAdd: {
        width: 11.73, 
        height: 11,
    }
})