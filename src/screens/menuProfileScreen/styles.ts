import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer: {
        // flex: 1,
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // height: '100%',
        width: '100%',
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

    viewInfo: {
        width: '97%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
    },

    imgAvatar: {
        width: 107.03,
        height: 107.03,
        borderRadius: 1000,
    },

    viewText: {
        flex: 1,
        padding: 10,
        marginLeft: 10,
        flexDirection: 'column',
    },

    txtName: {
        fontSize: 20,
        fontWeight: '400',
        color: '#32343E',
    },

    txtStatus: {
        fontSize: 14,
        fontWeight: '400',
        color: '#A0A5BA',
    },

    viewSettingList: {
        width: '100%',
        // padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },

    viewSettingGroup: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#F0F5FA',
        borderRadius: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },

})