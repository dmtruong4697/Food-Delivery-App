import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        width: 326,
        height: 117,
        flexDirection: 'row',
        marginBottom: 20,
    },

    viewImage: {
        width: 136,
        height: 117,
        borderRadius: 20,
        backgroundColor: 'gray',
        marginRight: 10,
    },

    imgImage: {

    },

    viewContentContainer: {
        flexDirection: 'column',
        flex: 1,
    },

    viewContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    viewText: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },

    txtName: {
        fontSize: 18,
        fontWeight: '400',
        color: '#1A1817',
    },

    txtPrice: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1817',
    },

    btnDelete: {
        width: 27,
        height: 27,
    },

    viewNumberInput: {
        width: 89,
        height: 22,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },

    btnNumberInput: {
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtNumberInput: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1A1817',
    },

})