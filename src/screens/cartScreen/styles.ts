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

    viewTitle: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },

    txtTitle: {
        fontSize: 17, 
        fontWeight: '400', 
        color: '#181C2E',
    },

    viewItemList: {
        marginTop: 20,
        maxHeight: 400,
    },

    viewFooter: {
        height: 310,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: '#F0F5FA',
        padding: 20,
    },

    viewInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 30,
        gap: 40,
    },

    viewAddressEdit: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    txtAddressEdit: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    txtAddressEditButton: {
        fontSize: 14,
        fontWeight: '400',
        textDecorationLine: 'underline',
        color: '#FF7622',
    },

    txtAddress: {
        fontSize: 16,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    viewTotal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    txtTotal: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    txtPrice: {
        fontSize: 30,
        fontWeight: '400',
        color: '#181C2E',
    },

    btnBreakDown: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FF7622',
    }
})