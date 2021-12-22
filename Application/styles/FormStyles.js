import { StyleSheet } from 'react-native';


export const formStyles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        borderColor: 'silver',
        marginBottom: '6%',
        padding: 10,
        borderRadius: 15,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 0
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: 'rgba(255, 154, 158, 1)',
        borderRadius: 15,
        padding: '4%',
    },
    addButton: {
        backgroundColor: 'rgba(170, 226, 170, 1)',
        borderRadius: 15,
        padding: '4%',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'roboto-reg',
        color: 'white',
    },
});