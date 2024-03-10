import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        height: 120,
        width: 310,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginRight: 10,
    },

    viewImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 8,
        backgroundColor: '#F0ECE9',
        marginRight: 10,
    },
    
    viewContent: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: 20,
    },

    viewButtonGroup: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        //width: '100%',
        height: 48,
        marginBottom: 5,
    },

    imgImage: {
        width: 100, 
        height: 100,
    },

    txtName: {
        fontSize: 20, 
        fontWeight: '400', 
        color: '#403F3E',
    },

    viewInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },

    txtPrice: {
        fontSize: 20, 
        fontWeight: '400', 
        color: '#403F3E',
    },

    viewRating: {
        flexDirection: 'row', 
        alignItems: 'center',
    },

    imgRating: {
        height: 13.5, 
        width: 13.5, 
        marginRight: 3,
    },

    txtRating: {
        fontSize: 16, fontWeight: '400', color: '#B0A9A2',
    },

    btnHeart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: '#E3DCD5',
        marginRight: 10,
    },

    imgHeart: {
        width: 24, 
        height: 24,
    },

    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 1000,
        backgroundColor: '#FFCA28',
    },

    imgCart: {
        width: 24, 
        height: 24,
    },
})