import { StyleSheet } from 'react-native';

export const taskListStyles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        margin: 7,
        backgroundColor: 'rgba(255, 225, 216, 1)',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 3,
    },
    taskContainer:{
        flex: 1,
        marginHorizontal: 3,
        marginTop: 10,
        marginBottom: 5,
    },
    task: {
        //для task в коллекциях
        fontSize: 24,
        fontFamily: 'roboto-bold',
    },
});