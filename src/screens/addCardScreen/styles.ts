import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },

    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 15,
    },

    btnBack: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    imgButtonBack: {
        height: 12, 
        width: 6,
    },

    viewTitle: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },

    txtTitle: {
        fontSize: 17, 
        fontWeight: '400', 
        color: '#181C2E',
    },

    viewInputForm: {
        //height: 200,
        width: '92%',
        marginTop: 20,
    },

    viewInput: {
        width: '100%',
        height: 94,
        marginBottom: 20,
        //flex: 1,
    },

    viewInput1: {
        width: '48%',
        height: 94,
        marginBottom: 20,
        //flex: 1,
    },

    txtFieldTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    viewInputField: {
        width: '100%',
        height: 61.95,
        backgroundColor: '#F0F5FA',
        borderRadius: 10,
        marginTop: 5,
        padding: 21,
        fontSize: 16,
        fontWeight: '400',
        color: '#32343E',
    },

    viewFooter: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 20,
    },
})