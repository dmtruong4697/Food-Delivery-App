import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        width: 305,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 12,
    },

    viewIcon: {
        height: 42.81,
        width: 42.81,
        backgroundColor: '#FFFFFF',
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgIcon: {
        width: 16,
        resizeMode: 'contain',
    },

    txtName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: '#1A1817',
        marginLeft: 15,
    },

    viewArrow: {
        height: 42.81,
        width: 42.81,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgArrow: {
        width: 6,
        resizeMode: 'contain',
    },
})