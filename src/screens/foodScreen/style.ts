import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 'auto',
    },

    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 20,
    },

    popularBurger: {
        alignItems: 'center',
        height: 445,
        width: '100%',
        //backgroundColor: 'pink',
        marginTop: 20,
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

    viewSelectMenu: {
        flex: 1,
        //flexDirection: 'column', 
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },

    btnSelectMenu: {
        height: 45,
        width: 102,
        borderWidth: 1,
        borderColor: '#ECF0F4',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnSearch: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#181C2E',
        borderRadius: 1000,
    },

    imgButtonSearch: {
        height: 15, 
        width: 15,
    },

    btnFilter: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
        marginLeft: 5,
    },

    imgButtonFilter: {
        height: 18, 
        width: 22,
    },

    txtSelectMenu: {
        fontSize: 12, 
        fontWeight: '700', 
        color: '#181C2E',
    },

    viewTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 27,
        width: '100%',
        marginBottom: 20,
        marginLeft: 20,
    },

    txtTitle: {
        fontSize: 20, 
        fontWeight: '400', 
        color: '#32343E', 
        flex: 1,
    },
})