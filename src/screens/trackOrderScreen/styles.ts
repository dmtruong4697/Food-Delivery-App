import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        // backgroundColor: 'pink',
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
        fontWeight: '400', 
        color: '#1A1817',
    },

    viewMap: {

    },

    viewModal: {
        width: '100%',
        height: 300,
        backgroundColor: 'pink',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },

    viewOrderInfo: {
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },

    imgOrder: {
        width: 65.48,
        height: 65.48,
        borderRadius: 10,
        marginRight: 15,
    },

    viewContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 0,
    },

    txtRestaurantName: {
        fontSize: 18,
        fontWeight: '400',
        color: '#1A1817',
    },

    txtCreate: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A18174D',
    },

    txtDish: {
        fontSize: 13,
        fontWeight: '400',
        color: '#1A1817CC',
    },
    
    viewOrderList: {

    },

    viewOrderTracking: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    txtTime: {
        fontSize: 30,
        fontWeight: '800',
        color: '#1A1817',
    },

    txtDeliveryTime: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A18174D',
    },

    viewFooter: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        padding: 20,
    },

    imageShipper: {
        width: 56,
        height: 56,
        borderRadius: 1000,
    },

    viewShipperInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
    },

    txtShipperName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1817',
    },

    txtShippingMethod: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A18174D',
    },

    btnCall: {
        width: 46.77,
        height: 46.77,
        backgroundColor: '#FF7622',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgCall: {
        height: 15.53,
        width: 15.53,
    },

    btnMessage: {
        width: 46.77,
        height: 46.77,
        borderWidth: 1,
        borderColor: '#FF7622',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgMessage: {
        width: 22.86,
        height: 22.86,
    }

})