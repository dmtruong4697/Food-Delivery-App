import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },

    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 15,
    },

    btnBack: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    imgButtonBack: {
        height: 12, 
        width: 6,
    },

    imgButtonOption: {
        height: 3.5,
        width: 16,
    },

    btnOption: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    viewTitle: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },

    txtTitle: {
        fontSize: 20, 
        fontWeight: '500', 
        color: '#1A1817',
    },

    viewCover: {
        width: 350,
        height: 197,
        borderRadius: 30,
        marginTop: 25,
    },

    imgCover: {
        width: 350,
        height: 197,
        borderRadius: 30,
    },

    btnCover: {
        height:25,
        width: 25,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        bottom: 15,
    },

    imgButtonCover: {
        width: 16.06,
        height: 13.92,
    },

    btnRestaurant: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 47,
        padding: 10,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        marginTop: 16,
        marginLeft: 5,
        alignSelf: 'flex-start',
    },

    imgRestaurantButton: {
        width: 21,
        height: 21,
        borderRadius: 1000,
        marginRight: 10,
    },

    txtRestaurantButton: {
        fontSize: 14,
        fontWeight: '400',
        color: '#181C2E',
    },

    viewContent: {
        width: '97%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 15,
    },

    viewInfo: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    txtName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#181C2E',
    },

    txtDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    viewInfoItem: {
        flexDirection: 'row', 
        alignItems: 'center',
    },

    imgRating: {
        width: 21.41,
        height: 21.37,
        marginRight: 5,
    },

    txtRating: {
        fontSize: 16,
        fontWeight: '700',
        color: '#181C2E',
    },

    imgShipping: {
        width: 24.62,
        height: 17.1,
        marginRight: 5,
    },

    txtShipping: {
        fontSize: 14,
        fontWeight: '400',
        color: '#181C2E',
    },

    imgTime: {
        width: 21.41,
        height: 21.37,
        marginRight: 5,
    },

    txtTime: {
        fontSize: 14,
        fontWeight: '400',
        color: '#181C2E',
    },

    viewSize: {
        width: '97%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        flexDirection: 'row',
        marginTop: 20,
    },

    txtSize: {
        fontSize: 13,
        fontWeight: '400',
        color: '#32343E',
        marginRight: 10,
    },

    btnSize: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 1000,
    },

    txtButtonSize: {
        fontSize: 16,
        fontWeight: '400',
    },

    viewModal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 195.36,
        width: '100%',
        alignSelf: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#F0F5FA',
        position: 'absolute',
        bottom: -20,
        padding: 20,
    },

    viewPrice: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },

    txtPrice: {
        fontSize: 28,
        fontWeight: '400',
        color: '#181C2E',
    },

    viewNumberInput: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 130,
        height: 49.92,
        borderRadius: 1000,
        padding: 10,
        backgroundColor: '#121223',
    },

    btnNumberInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24.96,
        height: 24.96,
        borderRadius: 1000,
        backgroundColor: 'gray',
    },

    txtNumberInput: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },

    viewAddButton: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    btnAddButton: {
        width: 340.08,
        height: 64.48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#FF7622',
    },

    txtAddButton: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    }
})