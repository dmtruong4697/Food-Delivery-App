import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '90%',
        height: 64,
        alignSelf: 'auto',
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        marginTop: 10,
    },

    viewImage: {
        width: 60,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginRight: 10,
    },

    txtName: {
        fontSize: 16,
        fontWeight: '400',
        color: '#32343E',
    },

    viewContent: {
        flexDirection: 'column',
    },

    viewRating: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    txtRating: {
        fontSize: 16, 
        fontWeight: '400', 
        color: '#181C2E',
    },

    imgRating: {
        height: 15, 
        width: 15, 
        marginRight: 5,
    },
})