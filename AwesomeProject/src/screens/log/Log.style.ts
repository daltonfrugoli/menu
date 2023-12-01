import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#58A2FA'
    },
    container: {
        height: '100%',
        width: '90%',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        backgroundColor: '#2D7AD5'
    },
    voltar: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
    images: {
        height: 300,
        width: 300,
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 40
    },
    screenName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 40
    }
})
