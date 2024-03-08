import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        height: 152,
        width: 166,
        padding: 10,
        flexDirection: 'column',
        borderRadius: 20,
        overflow: 'hidden',   
        backgroundColor: "#ffffff"  
    },

    viewShadow: {
      borderRadius: 20,
      backgroundColor: 'transparent',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.15,
      shadowRadius: 1.00,
      elevation: 2,
    },

    viewContent: {
        width: '100%',
    },

    imgImage: {
        height: 90, 
        width: 90
    },

    txtTitle: {
        fontSize: 15, 
        fontWeight: '700', 
        color: '#32343E',
    },

    txtContent: {
        fontSize: 13, 
        fontWeight: '400', 
        color: '#646982',
    },
})