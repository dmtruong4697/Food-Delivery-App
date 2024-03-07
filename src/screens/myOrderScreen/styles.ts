import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
    },

    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '97%',
        height: 50,
        marginTop: 15,
        alignSelf: 'center',
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

    imgButtonOption: {
        height: 3.5,
        width: 16,
    },

    btnOption: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    viewTab: {
        flex: 1, 
        marginTop: 15,
    },

})