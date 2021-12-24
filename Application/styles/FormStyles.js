import { StyleSheet } from 'react-native';


export const formStyles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        borderColor: 'silver',
        marginBottom: '6%',
        padding: 10,
        borderRadius: 15,
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