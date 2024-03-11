import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        height: 77.29,
        width: '100%',
        marginBottom: 10,
    },

    viewContentContainer: {
        flexDirection: 'column',
        height: 77.29,
        // width: '100%',
    },

    txtTime: {
        fontSize: 12,
        fontWeight: '400',
        color: '#1A18174D',
        position: 'absolute',
        left: 18,
        top: -20,
    },

    viewContent: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgSeen: {
        height: 9.6,
        width: 7.78,
    },

    viewMessage: {
        height: 54.42,
        padding: 10,
        backgroundColor: '#FF7622',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtMessage: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
    },

    imgAvatar: {
        height: 42.81,
        width: 42.81,
        borderRadius: 1000,
        marginLeft: 5,
    },
})