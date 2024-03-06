import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        height: 218,
        width: 350,
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 20,
    },

    imgCover: {
        width: '100%',
        height: 122.89,
        borderRadius: 10,
    },

    viewContent: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 8,
    },

    viewInfo: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    txtName: {
        fontSize: 20,
        fontWeight: '400',
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
})