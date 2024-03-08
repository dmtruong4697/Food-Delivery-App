import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    slideContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 262,
      height: 304,
      marginTop: -180,
    },
    title: {
      fontSize: 24,
      marginTop: 16,
      fontWeight: '700',
      color: '#000000',
    },
    text: {
      width: '95%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      color: '#646982',
      marginTop: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
    },

    btnSkip: {
      width: 306,
      height: 66,
      borderRadius: 12,
      // backgroundColor: "#FFFFFF",
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
  });