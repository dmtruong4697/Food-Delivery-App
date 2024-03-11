import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row-reverse',
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
        right: 5,
        top: -20,
    },

    viewContent: {
        gap: 5,
        flexDirection: 'row-reverse',
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
        backgroundColor: '#F0F5FA',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtMessage: {
        color: '#32343E',
        fontSize: 14,
        fontWeight: '400',
    },

    imgAvatar: {
        height: 42.81,
        width: 42.81,
        borderRadius: 1000,
        marginRight: 5,
    },
})