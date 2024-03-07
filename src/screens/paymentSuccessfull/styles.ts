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

    btnCancel: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 45,
        backgroundColor: '#ECF0F4',
        borderRadius: 1000,
    },

    imgButtonCancel: {
        height: 10, 
        width: 10,
    },

    viewContent: {
        width: 350,
        height: 355,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },

    viewImageContent: {
        height: 160,
        width: 160,
        borderRadius: 1000,
        backgroundColor: '#F0F5FA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    
    imgContent: {
        height: 104,
        width: 104,
    },

    txtTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1A1817',
        marginBottom: 10,
    },

    txtContent: {
        maxWidth: '80%',
        fontSize: 16,
        fontWeight: '400',
        color: '#B0A9A2',
        textAlign: 'center',
    }
})