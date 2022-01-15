import { StyleSheet } from 'react-native';


export const formStyles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        borderColor: 'silver',
        marginTop: '7%',
        padding: '3%',
        borderRadius: 15,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '7%',
    },
    button: {
        flex: 1,
        borderRadius: 15,
        padding: '4%',
        marginHorizontal: '5%',
    },
    cancelButton: {
        backgroundColor: 'rgba(255, 154, 158, 1)',
    },
    addButton: {
        backgroundColor: 'rgba(170, 226, 170, 1)',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'roboto-reg',
        color: 'white',
        alignSelf: 'center',
    },
    errorWrap: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '3%',
    },
    errorText: {
        color:'red',
        fontSize: 14,
        fontFamily: 'roboto-reg',
    },
    errorExclamation: {
    },
});