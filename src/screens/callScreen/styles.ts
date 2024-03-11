import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },

    viewSheetContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column',
    },

    imgAvatar: {
        width: 109.46,
        height: 109.46,
        borderRadius: 1000,
        marginBottom: 10,
    },

    txtName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1A1817',
        marginBottom: 10,
    },

    txtStatus: {
        fontSize: 16,
        fontWeight: '400',
        color: '#1A18174D',
        marginBottom: 30,
    },

    viewOption: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btnMic: {
        width: 50.27,
        height: 50.27,
        borderRadius: 1000,
        backgroundColor: '#F0F5FA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnVolume: {
        width: 50.27,
        height: 50.27,
        borderRadius: 1000,
        backgroundColor: '#F0F5FA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgMic: {
        height: 21.19,
        width: 21.36,
    },

    imgVolume: {
        height: 27.43,
        width: 27.43,
    },

    btnCall: {
        width: 62.94,
        height: 62.94,
        borderRadius: 1000,
        backgroundColor: '#FF3434',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgCall: {
        width: 31.32,
        height: 31.32,
    },
})