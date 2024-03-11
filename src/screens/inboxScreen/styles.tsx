import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
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

    viewMessage: {
        width: '100%',
        padding: 10,
    },

    viewInput: {
        width: '95%',
        height: 66.16,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1A18174D',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
    },

    btnIcon: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgIcon: {
        height: 19.39,
        width: 19.39,
    },

    inputField: {
        flex: 1,
        padding: 10,
        fontSize: 12,
        fontWeight: '400',
        color: '#1A18174D',
    },

    btnSend: {
        height: 44.8,
        width: 44.8,
        backgroundColor: '#FFFFFF',
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgSend: {
        height: 21.41,
        width: 21.34,
    }
})