import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    imgImage: {
        width: '110%',
        resizeMode: 'contain',
        marginBottom: 10,
    },

    txtTitle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#32343E',
        marginBottom: 5,
    },

    txtContent: {
        fontSize: 15,
        fontWeight: '400',
        color: '#646982',
        marginBottom: 15,
    },

    viewInputField: {
        width: '95%',
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        padding: 10,
        fontSize: 14,
        fontWeight: '400',
    },

    viewFooter: {
        position: 'absolute',
        bottom: 15,
    }
})