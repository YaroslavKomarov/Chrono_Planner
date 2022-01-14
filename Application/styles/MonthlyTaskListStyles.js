import { StyleSheet } from 'react-native';


export const monthlyTaskListStyles = StyleSheet.create({
    list: {
        flex: 1,
		margin: '5%',
        paddingVertical: '6%',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        borderRadius: 25,
    },
    modalView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(35,35,35,0.45)'
    },
    formContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        alignItems: "center",
        paddingBottom: '7%',
        marginHorizontal: '4%',
    },
    formTitle: {
        marginHorizontal: '10%',
        marginBottom: '5%',
        textAlign: 'center',
        fontFamily: 'roboto-bold',
        fontSize: 20,
    }
});
