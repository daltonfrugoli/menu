import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({

    background: {
        backgroundColor: '#58A2FA',
        flex: 1
    },
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    buttonInfo: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        borderColor: 'white',
    },
    buttonMenu: {
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 30,
        backgroundColor: 'white', 
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        borderRadius: 15

    },
    images: {
        height: 100,
        width: 100,
    },
    buttonNames: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})