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

    viewMethodList: {
        marginTop: 20,
        width: '97%',
    },

    viewMethod: {
        height: 98,
        width: 85,
        alignItems: 'center',
        flexDirection: 'column',
    },

    txtMethod: {
        fontSize: 14,
        fontWeight: '400',
        color: '#464E57',
    },

    btnMethod: {
        height: 72,
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //backgroundColor: '#F0F5FA',
        marginBottom: 5,
    },

    imgMethodButton: {
        height: 24,
        resizeMode: 'contain',
    },

    viewCardList: {
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },

    txtCardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#32343E',
    },

    txtCard: {
        fontSize: 15,
        fontWeight: '400',
        color: '#2D2D2D',
    },

    viewNocard: {
        width: '100%',
        height: 274,
        borderRadius: 20,
        backgroundColor: '#F0F5FA',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    imgNocard: {
        height: 124.74,
        width: 214.73,
        marginBottom: 20,
    },

    btnAddNew: {
        height: 62, 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F0ECE9',
        marginTop: 10,
    },

    txtAddnew: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF7622',
    },

    viewCard: {
        width: 340,
        height: 78,
        backgroundColor: '#F0F5FA',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
    },

    viewCardInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
    },

    btnCardDown: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewFooter: {
        height: 150,
        width: '100%',
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    viewTotal: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
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
    }
})