import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        height: 182,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 10,
    },

    viewType: {
        width: '100%',
        height: 30,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#EEF2F6',
    },

    txtType: {
        fontSize: 14,
        fontWeight: '400',
        color: '#181C2E',
        marginRight: 20,
    },

    txtStatus: {
        fontSize: 14,
        fontWeight: '700',
    },

    txtCompleted: {
        fontSize: 14,
        fontWeight: '700',
        color: '#059C6A',
    },

    txtCanceled: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF0000',
    },

    viewContent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    imgImage: {
        width: 74,
        height: 63,
        borderRadius: 7,
        backgroundColor: 'gray',
    },

    viewInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },

    txtName: {
        fontSize: 14,
        fontWeight: '700',
        color: '#181C2E',
    },

    txtQuantity: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6B6E82',
    },

    txtCode: {
        fontSize: 14,
        fontWeight: '400',
        color: '#6B6E82',
        textDecorationLine: 'underline',
        alignSelf: 'flex-start'
    },

    viewButtonGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    btnButton: {
        height: 40.44,
        width: 148.78,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    txtButton: {
        fontSize: 12,
        fontWeight: '700',
    }
})