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

    btnProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    viewTitle: {
        flex: 1,
        flexDirection: 'column', 
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },

    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#181C2E',
        borderRadius: 1000,
    },

    imgButtonCart: {
        height: 20, 
        width: 18,
    },

    viewInputField: {
        height: '100%',
        fontSize: 16,
        fontWeight: '400',
        color: '#676767',
        marginLeft: 5,
    },


    viewCategoriesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 27,
        width: '100%',
        marginBottom: 5,
    },

    txtCategoriesTitle: {
        fontSize: 20, 
        fontWeight: '400', 
        color: '#32343E', 
        flex: 1,
    },

    btnSeeAll: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    txtSeeAll: {
        fontSize: 16, 
        fontWeight: '400', 
        color: '#333333', 
        marginRight: 5,
    },

    imgButtonSeeAll: {
        width: 5, 
        height: 10,
    },

    viewModalContainer: {
        height: 442,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 25,
        alignItems: 'center',
        backgroundColor: '#E76F00',
        borderRadius: 30,
    },

    btnCloseModal: {
        width: 48,
        height: 48,
        borderRadius: 1000,
        backgroundColor: '#FFE194',
        position: 'absolute',
        top: -24,
        right: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTitle: {
        fontSize: 41,
        fontWeight: '800',
        color: '#FFFFFF',
    },

    txtCode: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },

    txtDescription: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
    },

    btnGotIt: {
        width: '88%',
        height: 66.19,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})