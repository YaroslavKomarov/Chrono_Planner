import { StyleSheet } from 'react-native';


export const taskListStyles = StyleSheet.create({
    list: {
		flex: 1,
		margin: '5%',
        paddingVertical: '6%',
        paddingHorizontal: '2%',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        borderRadius: 25,
    },
    modalView: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: 'rgba(35,35,35,0.45)'
    },
    formContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        marginHorizontal: '4%',
        marginTop: '60%',
    },
    formTitle: {
        marginHorizontal: '10%',
        textAlign: 'center',
        fontFamily: 'roboto-bold',
        fontSize: 20,
    }
});
