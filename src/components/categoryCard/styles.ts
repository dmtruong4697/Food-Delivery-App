import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        padding: 5,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        maxWidth: 150,
        borderRadius: 39,  
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },

    viewImage: {
        height: 44,
        width: 44,
        backgroundColor: '#F0ECE9',
        borderRadius: 1000,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgImage: {
        width: 40, 
        height: 40,
    },

    txtName: {
        fontSize: 13, 
        fontWeight: '700', 
        color: '#32343E', 
        marginRight: 5,
    },
})